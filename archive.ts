export async function deleteService(
  address: string,
  name: string
): Promise<string> {
  const result = await fetch(`http://${address}:8081/fledge/service/${name}`, {
    method: 'DELETE',
  });

  const json = await result.json();
  return json;
}

export async function disableService(
  address: string,
  name: string
): Promise<string> {
  const result = await fetch(`http://${address}:8081/fledge/schedule/disable`, {
    method: 'PUT',
    body: JSON.stringify({ schedule_name: name }),
  });

  const json = result.json();
  console.log(json);

  return json;
}

/*
export async function services(address: string): Promise<FledgeService[]> {
  const serv = await fetch(`http://${address}:8081/fledge/service`).then(
    result => result.json()
  );
  console.log(serv);

  const south = await fetch(`http://${address}:8081/fledge/south`).then(
    result => result.json()
  );
  console.log(south);

  const avalable = await fetch(
    `http://${address}:8081/fledge/service/available`
  ).then(result => result.json());
  console.log(avalable);

  const installed = await fetch(
    `http://${address}:8081/fledge/service/installed`
  ).then(result => result.json());
  console.log(installed);

  return [];
} */

/*
type FledgeService = {
  name: string;
  type: 'Southbound' | 'Northbound' | 'Storage' | 'Core' | 'Dispatcher';
  address: string;
  management_port: string;
  service_port: string;
  protocol: string;
  status: string;
}; */
