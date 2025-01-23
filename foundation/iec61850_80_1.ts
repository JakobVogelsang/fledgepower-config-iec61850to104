import { Mappings61850n104, pivotTypes, typeids } from './foundation.js';

function commonDataClass(lNodeType: Element, ancest: string[]): string | null {
  const doc = lNodeType.ownerDocument;

  const dOs: Element[] = [];
  const doTypes: Element[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 4; i < ancest.length; i++) {
    if (dOs.length === 0) {
      const dO = lNodeType.querySelector(`DO[name="${ancest[i]}"]`);
      if (dO) dOs.push(dO);
      else break;
    }

    const type = dOs[dOs.length - 1].getAttribute('type');
    const doType = doc.querySelector(
      `:root > DataTypeTemplates > DOType[id="${type}"]`
    );
    if (!doType) break;
    doTypes.push(doType);

    const sdo = doType.querySelector(`:scope > SDO[name="${ancest[i]}"]`);
    if (sdo) dOs.push(sdo);
    else break;
  }

  if (dOs.length === 0) return null;
  return doTypes[doTypes.length - 1].getAttribute('cdc');
}

function ancestors(iec104: Element): string[] {
  const dai = iec104.parentElement;
  if (!dai) return [];
  const ancestorss: string[] = [dai.getAttribute('name')!];
  let parent = dai.parentElement!;
  while (parent.tagName === 'SDI' || parent.tagName === 'DOI') {
    ancestorss.splice(0, 0, parent.getAttribute('name')!);
    parent = parent.parentElement!;
  }

  while (parent.tagName === 'LN' || parent.tagName === 'LN0') {
    ancestorss.splice(0, 0, parent.getAttribute('prefix') ?? '');
    ancestorss.splice(0, 0, parent.getAttribute('lnClass') ?? '');
    ancestorss.splice(0, 0, parent.getAttribute('inst') ?? '');
    parent = parent.parentElement!;
  }

  while (parent.tagName === 'LDevice') {
    ancestorss.splice(0, 0, parent.getAttribute('inst') ?? '');
    parent = parent.parentElement!;
  }

  return ancestorss;
}

function reference(element: Element, ref = ''): string {
  if (element.tagName === 'Private')
    return reference(element.parentElement!, '');
  if (element.tagName === 'DAI')
    return reference(element.parentElement!, element.getAttribute('name')!);
  if (element.tagName === 'SDI' || element.tagName === 'DOI')
    return reference(
      element.parentElement!,
      `${element.getAttribute('name')!}.${ref}`
    );
  if (element.tagName === 'LN' || element.tagName === 'LN0')
    return reference(
      element.parentElement!,
      `${element.getAttribute('prefix') ?? ''}${
        element.getAttribute('lnClass') ?? ''
      }${element.getAttribute('inst') ?? ''}.${ref}`
    );
  if (element.tagName === 'LDevice')
    return reference(
      element.closest('IED')!,
      `${element.getAttribute('inst') ?? ''}/${ref}`
    );
  if (element.tagName === 'IED')
    return `${element.getAttribute('name') ?? ''}${ref}`;

  return ref;
}

export function getMapping(privateIec104: Element): Mappings61850n104 | null {
  const address = privateIec104.querySelector(':scope > Address');
  const [casdu, ioa, ti] = ['casdu', 'ioa', 'ti'].map(key =>
    address?.getAttribute(key)
  );
  if (!casdu || !ioa || !ti) return null;

  const ref = reference(privateIec104);
  const lnType = privateIec104.closest('LN,LN0')?.getAttribute('lnType');
  const lNodeType = privateIec104.ownerDocument.querySelector(
    `LNodeType[id="${lnType}"]`
  );

  if (!lNodeType) return null;
  const cdc = commonDataClass(lNodeType, ancestors(privateIec104));
  if (!cdc) return null;

  const iec61850 = {
    ied: { name: 'IED', ip_addr: '192.168.0.200', port: 49152 },
    cdc,
    ref,
    service: 'polling',
  };

  const iec104 = {
    casdu,
    ioa,
    ti,
  };

  const typeid = typeids[ti];
  const pivotType = pivotTypes[cdc];
  if (!typeid || !pivotType)
    return { supported: false, selected: false, iec61850, iec104 };

  return { supported: true, selected: true, iec61850, iec104 };
}
