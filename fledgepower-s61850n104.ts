import { LitElement, html, TemplateResult, css } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { until } from 'lit/directives/until.js';

import { Mappings61850n104 } from './foundation/foundation.js';
import { getMapping } from './foundation/iec61850_80_1.js';
import {
  fledgePing,
  getNorthServices,
  getSouthServices,
  pushConfigToSouth,
  serviceStatus,
} from './foundation/iec61850south.js';

/** An editor [[`plugin`]] for editing the `Substation` section. */
export default class Fledgepower61850to104 extends LitElement {
  /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  @state()
  mapping?: Mappings61850n104[];

  @state()
  southConfigPossible = false;

  @state()
  selectedSouthPlugin: string = '';

  @state()
  selectedNorthPlugin: string = '';

  @state()
  selectedApplicationType: string = 'Polling';

  @state()
  selectedReportControl = '';

  @state()
  fledgeIP: string = '192.168.0.200';

  @state()
  fledgePort: string = '8081';

  @state()
  serverIP: string = '192.168.0.67';

  @state()
  serverPort: string = '49152';

  @query('.status.north') statusNorth!: HTMLInputElement;

  @query('.status.south') statusSouth!: HTMLInputElement;

  // eslint-disable-next-line class-methods-use-this
  async onSouthSelect(evt: Event): Promise<void> {
    const name = (evt.target as HTMLSelectElement).value;
    const status = await serviceStatus({
      address: this.fledgeIP,
      port: this.fledgePort,
      name,
    });

    if (!status) this.statusSouth.value = 'Cannot check pslugin';

    this.selectedSouthPlugin = name;
    this.statusSouth.value = status!;
    this.southConfigPossible = true;
  }

  // eslint-disable-next-line class-methods-use-this
  async onNorthSelect(evt: Event): Promise<void> {
    const name = (evt.target as HTMLSelectElement).value;
    const status = await serviceStatus({
      address: this.fledgeIP,
      port: this.fledgePort,
      name,
    });

    this.statusNorth.value = status ?? 'undefined';
  }

  // eslint-disable-next-line class-methods-use-this
  async renderSouthSelection(): Promise<TemplateResult> {
    const norths = await getSouthServices(this.fledgeIP, this.fledgePort);
    return html`<select
      @input="${(evt: Event) => this.onSouthSelect(evt)}"
      style="margin: 5px;"
    >
      <option>--Please choose an option--</option>
      ${norths.map(north => html`<option>${north}</option>`)}
    </select>`;
  }

  // eslint-disable-next-line class-methods-use-this
  async renderNorthSelection(): Promise<TemplateResult> {
    const norths = await getNorthServices(this.fledgeIP, this.fledgePort);
    return html`<select
      @input="${(evt: Event) => this.onNorthSelect(evt)}"
      style="margin: 5px;"
    >
      <option>--Please choose an option--</option>
      ${norths.map(north => html`<option>${north}</option>`)}
    </select>`;
  }

  // eslint-disable-next-line class-methods-use-this
  check(evt: Event, map: Mappings61850n104): void {
    const check = (evt.target as HTMLInputElement).checked;

    // eslint-disable-next-line no-param-reassign
    if (check) map.selected = check;

    this.requestUpdate('mapping');
  }

  // eslint-disable-next-line class-methods-use-this
  checkAll(evt: Event): void {
    const check = (evt.target as HTMLInputElement).checked;

    for (const map of this.mapping!) if (map.supported) map.selected = check;

    this.requestUpdate('mapping');
  }

  initMapping(): void {
    if (!this.mapping)
      this.mapping = Array.from(
        this.doc.querySelectorAll('Private[type="IEC_60870_5_104"]')
      )
        .map(getMapping)
        .filter(map => map) as Mappings61850n104[];
  }

  onFledgePort(evt: Event): void {
    this.fledgePort = (evt.target as HTMLInputElement).value;
  }

  onFledgeIp(evt: Event): void {
    this.fledgeIP = (evt.target as HTMLInputElement).value;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onConnection(): void {
    fledgePing(this.fledgeIP, this.fledgePort);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onApplicationType(evt: Event): void {
    this.selectedApplicationType = (evt.target as HTMLSelectElement).value;
  }

  render(): TemplateResult {
    this.initMapping();

    return html` <section>
      <div
        class="box settings"
        style="display: flex; flex-direction: column; margin: 10px;"
      >
        <div style="display: flex; flex-direction: row; margin: 5px;">
          <label style="margin: 8px;">Fledge IP:</label>
          <input
            type="text"
            placeholder="192.168.0.200"
            .value="${this.fledgeIP}"
            @input="${(evt: Event) => this.onFledgeIp(evt)}"
          />
          <label style="margin: 8px;">Fledge Port:</label>
          <input
            type="text"
            placeholder="8081"
            .value="${this.fledgePort}"
            @input="${(evt: Event) => this.onFledgePort(evt)}"
          />
          <button
            style="margin-left: 5px;"
            @click="${() => this.onConnection()}"
          >
            Ping Fledge
          </button>
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
          ${until(this.renderNorthSelection(), html`<span>Loading...</span>`)}
          <label style="margin: 8px;">Status:</label>
          <input class="status north" type="text" disabled />
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
          ${until(this.renderSouthSelection(), html`<span>Loading...</span>`)}
          <label style="margin: 8px;">Status:</label>
          <input
            style="margin: 5px"
            class="status south"
            type="text"
            disabled
          />
          <button
            style="margin: 5px"
            ?disabled=${!this.southConfigPossible}
            @click="${() =>
              pushConfigToSouth(this.mapping!, {
                address: this.fledgeIP,
                port: this.fledgePort,
                name: this.selectedSouthPlugin,
              })}"
          >
            Push selection to IEC 61850 south
          </button>
        </div>
      </div>
      <div
        class="box application"
        style="display: flex; flex-direction: column; margin: 10px;"
      >
        <div style="display: flex; flex-direction: row; margin: 5px;">
          <label style="margin: 8px;">IEC 61850 Server IP:</label>
          <input
            type="text"
            placeholder="192.168.0.200"
            .value="${this.fledgeIP}"
            @input="${(evt: Event) => this.onFledgeIp(evt)}"
          />
          <label style="margin: 8px;">IEc 61850 Server Port:</label>
          <input
            type="text"
            placeholder="8081"
            .value="${this.fledgePort}"
            @input="${(evt: Event) => this.onFledgePort(evt)}"
          />
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
          <label style="margin: 8px;">IEC 61850 service type:</label>
          <select
            value="${this.selectedApplicationType}"
            @input="${(evt: Event) => this.onApplicationType(evt)}"
          >
            <option>Polling</option>
            <option>Static Reports</option>
            <option>Dynamic Reports</option>
          </select>
          <select
            class="${classMap({
              hide: this.selectedApplicationType !== 'Dynamic Reports',
            })}"
            value="${this.selectedApplicationType}"
            @input="${(evt: Event) => this.onApplicationType(evt)}"
          >
            <option>Polling</option>
            <option>Static Reports</option>
            <option>Dynamic Reports</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="row" colspan="1"></th>
            <th scope="row" colspan="2" class="vlast">IEC 61850-6</th>
            <th scope="row" colspan="3">IEC 60870-5-104</th>
          </tr>
          <tr class="blast">
            <th scope="col">
              <input
                type="checkbox"
                checked
                @input="${(evt: Event) => this.checkAll(evt)}"
              />
            </th>
            <th scope="col">CDC</th>
            <th scope="col" class="vlast">reference</th>
            <th scope="col">casdu</th>
            <th scope="col">ioa</th>
            <th scope="col">ti</th>
          </tr>
        </thead>
        <tbody>
          ${this.mapping!.map(
            map =>
              html`<tr>
                <td>
                  <input
                    type="checkbox"
                    ?checked=${map.selected}
                    ?disabled=${!map.supported}
                    @input="${(evt: Event) => this.check(evt, map)}"
                  />
                </td>
                <td>${map.iec61850.cdc}</td>
                <td class="last">${map.iec61850.ref}</td>
                <td>${map.iec104.casdu}</td>
                <td>${map.iec104.ioa}</td>
                <td>${map.iec104.ti}</td>
              </tr>`
          )}
        </tbody>
      </table>
    </section>`;
  }

  static styles = css`
    div.box {
      border: 2px solid black;
    }

    .hide {
      display: none;
    }

    table {
      margin: 10;
      border-spacing: 0;
    }

    th.vlast {
      border-right: 2pt solid black;
    }

    tr.blast > th {
      border-bottom: 2pt solid black;
    }

    th {
      border-bottom: 1pt solid black;
      padding: 10px;
    }

    td.last {
      border-right: 2pt solid black;
    }

    td {
      border-bottom: 1pt solid black;
      padding: 10px;
    }
  `;
}
