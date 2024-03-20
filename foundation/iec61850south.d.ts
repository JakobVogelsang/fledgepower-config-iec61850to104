import { Mappings61850n104 } from './foundation.js';
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
export declare function iec61850protocolData(mapping: Mappings61850n104[]): ProtocolData | null;
type Protocol = {
    name: 'iec104';
    address: string;
    typeid: string;
} | {
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
export declare function iec61850exchangeData(mapping: Mappings61850n104[]): ExchangeDataStrange;
export declare function enableService(options: {
    address: string;
    port: string;
    name: string;
}): Promise<string>;
export declare function restartFledge(address: string, port: string): Promise<string>;
export declare function pushConfigToSouth(mapping: Mappings61850n104[], options: {
    address: string;
    port: string;
    name: string;
}): Promise<void>;
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
export declare function services(address: string, port: string): Promise<Services>;
export declare function serviceStatus(options: {
    address: string;
    port: string;
    name: string;
}): Promise<string | undefined>;
export declare function getSouthServices(address: string, port: string): Promise<string[]>;
export declare function getNorthServices(address: string, port: string): Promise<string[]>;
export declare function fledgePing(address: string, port: string): Promise<void>;
export {};
