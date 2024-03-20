import { LitElement, TemplateResult } from 'lit';
import { Mappings61850n104 } from './foundation/foundation.js';
/** An editor [[`plugin`]] for editing the `Substation` section. */
export default class Fledgepower61850to104 extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    mapping?: Mappings61850n104[];
    southConfigPossible: boolean;
    selectedSouthPlugin: string;
    selectedNorthPlugin: string;
    selectedApplicationType: string;
    selectedReportControl: string;
    fledgeIP: string;
    fledgePort: string;
    serverIP: string;
    serverPort: string;
    statusNorth: HTMLInputElement;
    statusSouth: HTMLInputElement;
    onSouthSelect(evt: Event): Promise<void>;
    onNorthSelect(evt: Event): Promise<void>;
    renderSouthSelection(): Promise<TemplateResult>;
    renderNorthSelection(): Promise<TemplateResult>;
    check(evt: Event, map: Mappings61850n104): void;
    checkAll(evt: Event): void;
    initMapping(): void;
    onFledgePort(evt: Event): void;
    onFledgeIp(evt: Event): void;
    onConnection(): void;
    onApplicationType(evt: Event): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
