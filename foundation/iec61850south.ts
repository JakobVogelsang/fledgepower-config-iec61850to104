import { Mappings61850n104, pivotTypes } from './foundation.js';

function objref(cdc: string, dataref: string): string {
  const bits = dataref.split('.');
  bits.pop();

  if (cdc === 'MV') bits.pop();

  return bits.join('.');
}

type ReportSubscription = {
  rcb_ref: string;
  dataset_ref?: string;
  trgopts?: string;
  buftm?: number;
  intgpd?: number;
  gi?: boolean;
};

type DataSet = {
  dataset_ref: string;
  entries: string[];
  dynamic?: boolean;
};

type ApplicationLayer = {
  polling_interval: number;
  datasets?: DataSet[];
  report_subscriptions?: ReportSubscription[];
};

type TransportLayer = {
  ied_name: string;
  connections?: [
    {
      ip_addr: string;
      port: number;
      tls: false;
    }
  ];
};

type ProtocolData = {
  protocol_stack: {
    name: string;
    version: string;
    transport_layer: TransportLayer;
    application_layer: ApplicationLayer;
  };
};

export function iec61850protocolData(
  mapping: Mappings61850n104[]
): ProtocolData | null {
  if (mapping.length === 0) return null;

  return {
    protocol_stack: {
      name: 'iec61850client',
      version: '0.0.1',
      transport_layer: {
        ied_name: mapping[0].iec61850.ied.name,
      },
      application_layer: {
        polling_interval: 5000,
      },
    },
  };
}

type Protocol =
  | {
      name: 'iec104';
      address: string;
      typeid: string;
    }
  | {
      name: 'iec61850';
      objref: string;
      cdc: string;
    };

type DataPoint = {
  label: string;
  pivot_id: string;
  pivot_type?: string;
  protocols: Protocol[];
};

export type ExchangeData = {
  exchanged_data: {
    name: 'iec104server' | 'iec61850' | 'iec104pivot';
    version: string;
    datapoints: DataPoint[];
  };
};

export type ExchangeDataStrange = {
  exchanged_data: ExchangeData;
};

export function iec61850exchangeData(
  mapping: Mappings61850n104[]
): ExchangeDataStrange {
  const datapoints: DataPoint[] = mapping
    .filter(map => map.selected === true)
    .map(map => ({
      label: `Lab${mapping.indexOf(map)}`,
      pivot_id: `Lab${mapping.indexOf(map)}`,
      protocols: [
        {
          name: 'iec61850',
          objref: objref(map.iec61850.cdc, map.iec61850.ref),
          cdc: pivotTypes[map.iec61850.cdc]!,
        },
      ],
    }));

  return {
    exchanged_data: {
      exchanged_data: {
        name: 'iec61850',
        version: '1.0.0',
        datapoints,
      },
    },
  };
}

export async function enableService(options: {
  address: string;
  port: string;
  name: string;
}): Promise<string> {
  const result = await fetch(
    `http://${options.address}:${options.port}/fledge/schedule/enable`,
    {
      method: 'PUT',
      body: JSON.stringify({ schedule_name: options.name }),
    }
  ).then(res => res.json());

  return result;
}

export async function restartFledge(
  address: string,
  port: string
): Promise<string> {
  const restart = await fetch(`http://${address}:${port}/fledge/restart`, {
    method: 'PUT',
  });
  const json = await restart.json();

  return json;
}

export async function pushConfigToSouth(
  mapping: Mappings61850n104[],
  options: { address: string; port: string; name: string }
): Promise<void> {
  const exchangedData = iec61850exchangeData(mapping);

  const config = await fetch(
    `http://${options.address}:${options.port}/fledge/category/${options.name}`,
    {
      method: 'PUT',
      body: JSON.stringify(exchangedData),
    }
  );
  const resConfig = await config.json();

  // enable the plugin
  const resEnable = await enableService(options);

  //
  const resRestart = await restartFledge(options.address, options.port);

  // eslint-disable-next-line no-alert
  window.alert(
    `${JSON.stringify(resConfig, undefined, 4)} ${JSON.stringify(
      resEnable,
      undefined,
      4
    )} ${JSON.stringify(resRestart, undefined, 4)}`
  );
}

type Service = {
  name: string;
  type: string;
  address: string;
  management_port: number;
  service_port: 34403;
  protocol: 'http';
  status: 'running';
};

type Services = {
  services: Service[];
};

export async function services(
  address: string,
  port: string
): Promise<Services> {
  const serviceObj: Services = await fetch(
    `http://${address}:${port}/fledge/service`
  ).then(result => result.json());

  return serviceObj;
}

export async function serviceStatus(options: {
  address: string;
  port: string;
  name: string;
}): Promise<string | undefined> {
  const servicesObj = await services(options.address, options.port);

  return servicesObj.services.find(service => service.name === options.name)
    ?.status;
}

export async function getSouthServices(
  address: string,
  port: string
): Promise<string[]> {
  const southServices: Services = await fetch(
    `http://${address}:${port}/fledge/south`
  ).then(result => result.json());

  return southServices.services.map(south => south.name);
}

export async function getNorthServices(
  address: string,
  port: string
): Promise<string[]> {
  const northServices: Service[] = await fetch(
    `http://${address}:${port}/fledge/north`
  ).then(result => result.json());

  return northServices.map(north => north.name);
}

export async function fledgePing(address: string, port: string): Promise<void> {
  try {
    const pingResult = await fetch(
      `http://${address}:${port}/fledge/ping`
    ).then(result => result.json());

    // eslint-disable-next-line no-alert
    window.alert(JSON.stringify(pingResult, undefined, 4));
  } catch (err) {
    // eslint-disable-next-line no-alert
    window.alert(err);
  }
}
