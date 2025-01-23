export const pivotTypes: Partial<Record<string, string>> = {
  SPS: 'SpsTyp',
  DPS: 'DpsTyp',
  INS: 'InsTyp',
  ENS: 'EnsTyp',
  MV: 'MvTyp',
  BSC: 'BscTyp',
  SPC: 'SpcTyp',
  DPC: 'DpcTyp',
  APC: 'ApcTyp',
  INC: 'IncTyp',
};

export const typeids: Partial<Record<string, string>> = {
  1: 'M_SP_NA_1',
  2: 'M_SP_TA_1',
  3: 'M_DP_NA_1',
  4: 'M_DP_TA_1',
  5: 'M_ST_NA_1',
  6: 'M_ST_TA_1',
  9: 'M_ME_NA_1',
  10: 'M_ME_TA_1',
  11: 'M_ME_NB_1',
  12: 'M_ME_TB_1',
  13: 'M_ME_NC_1',
  14: 'M_ME_TC_1',
  17: 'M_EP_TA_1',
  20: 'M_SP_NA_1',
  21: 'M_ME_ND_1',
  30: 'M_SP_TB_1',
  31: 'M_DP_TB_1',
  32: 'M_ST_TB_1',
  34: 'M_ME_TD_1',
  35: 'M_ME_TE_1',
  36: 'M_ME_TF_1',
  38: 'M_EP_TD_1',
  45: 'C_SC_NA_1',
  46: 'C_DC_NA_1',
  47: 'C_RC_NA_1',
  48: 'C_SE_NA_1',
  49: 'C_SE_NB_1',
  50: 'C_SE_NC_1',
  58: 'C_SC_TA_1',
  59: 'C_DC_TA_1',
  60: 'C_RC_TA_1',
  61: 'C_SE_TA_1',
  62: 'C_SE_TB_1',
  63: 'C_SE_TC_1',
};

type ReportService = { rcb_ref: string; dataset_ref: string };

type PollingService = string; // polling

export type Mappings61850n104 = {
  supported: boolean;
  selected: boolean;
  iec61850: {
    ied: { name: string; ip_addr: string; port: number };
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
