const senftlID = 'be1ba733-ca15-4638-8618-b5c4ccba8e72';
const aviaID = 'd98b72c0-8ded-4649-999c-2955dff45744';
const aralID = '52a23abe-c517-4964-ab2b-40986dd654ad';
const agipID = '91ffe312-b617-42a3-91ca-f77128657b74';
const omvID = 'ad0b74df-5cc4-4eb4-b2c4-d1a0aa5e0ac3';
const apiKEY = 'apikey=1ac888c8-0393-a06b-0eb0-ed1997606ec0';

const getTankstellePreis = (response) => {
  let aTankstellen = [];
  let senftlProps = response.prices[senftlID];
  senftlProps['name'] = 'Senftl GmbH';
  senftlProps['adresse'] = 'Hauptstraße 9, 84174 Eching';
  aTankstellen.push(senftlProps);
  let aviaProps = response.prices[aviaID];
  aviaProps['name'] = 'AVIA Tankstelle';
  aviaProps['adresse'] = 'Am Lenghardt 5, 84174 Eching';
  aTankstellen.push(aviaProps);
  let aralProps = response.prices[aralID];
  aralProps['name'] = 'Aral Tankstelle';
  aralProps['adresse'] = 'Gewerbepark Spörerau 1, 85368 Wang';
  aTankstellen.push(aralProps);
  let agipProps = response.prices[agipID];
  agipProps['name'] = 'Agip Tankselle';
  agipProps['adresse'] = 'Wittstraße 15, 84036 Landshut';
  aTankstellen.push(agipProps);
  let omvProps = response.prices[omvID];
  omvProps['name'] = 'OMV Tankselle';
  omvProps['adresse'] = 'Erlbacher Str. 4, 84172 Buch am Erlbach';
  aTankstellen.push(omvProps);
  return aTankstellen;
};

export default getTankstellePreis;
