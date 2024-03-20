export declare const pivotTypes: Partial<Record<string, string>>;
export declare const typeids: Partial<Record<string, string>>;
type ReportService = {
    rcb_ref: string;
    dataset_ref: string;
};
type PollingService = string;
export type Mappings61850n104 = {
    supported: boolean;
    selected: boolean;
    iec61850: {
        ied: {
            name: string;
            ip_addr: string;
            port: number;
        };
        cdc: string;
        ref: string;
        service: PollingService | ReportService;
    };
    iec104: {
        casdu: string;
        ioa: string;
        ti: string;
    };
};
export {};
