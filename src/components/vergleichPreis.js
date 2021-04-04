const preisVergleich = (tankstellen) => {
  let combinedErrorText = [];
  let dieselErrorText = dieselVergleich(tankstellen);
  let e5ErrorText = e5Vergleich(tankstellen);
  let e10ErrorText = e10Vergleich(tankstellen);
  if (dieselErrorText.length > 0) {
    for (let i = 0; i < dieselErrorText.length; i++) {
      combinedErrorText.push(dieselErrorText[i]);
    }
  }
  if (e5ErrorText.length > 0) {
    for (let i = 0; i < e5ErrorText.length; i++) {
      combinedErrorText.push(e5ErrorText[i]);
    }
  }
  if (e10ErrorText.length > 0) {
    for (let i = 0; i < e10ErrorText.length; i++) {
      combinedErrorText.push(e10ErrorText[i]);
    }
  }

  return combinedErrorText;
};

const dieselVergleich = (tankstellen) => {
  let dieselTextArray = [];
  const maxDiff = '0.01';
  if (tankstellen[1].diesel <= tankstellen[0].diesel) {
    let text = " Unser diesel preis is teuerer oder gliech als AVIA's";
    dieselTextArray.push(text);
  }
  for (let i = 1; i < tankstellen.length; i++) {
    if (tankstellen[i].diesel < tankstellen[0].diesel) {
      let diffPreis = tankstellen[0].diesel - tankstellen[i].diesel;
      let text = `${tankstellen[i].name} diesel preis is ${diffPreis} billeger  als unser Preis`;
      dieselTextArray.push(text);
    }
    if ((tankstellen[i].diesel - tankstellen[0].diesel).toFixed(2) > maxDiff) {
      let text = `Unser diesel Preis mehr als 0.01 cent billiger als ${tankstellen[i].name}`;
      dieselTextArray.push(text);
    }
  }
  return dieselTextArray;
};

const e5Vergleich = (tankstellen) => {
  let e5TextArray = [];
  const maxDiff = '0.01';
  if (tankstellen[1].e5 <= tankstellen[0].e5) {
    let text = " Unser E5 preis is teuerer oder gliech als AVIA's";
    e5TextArray.push(text);
  }
  for (let i = 1; i < tankstellen.length; i++) {
    if (tankstellen[i].e5 < tankstellen[0].e5) {
      let diffPreis = tankstellen[0].e5 - tankstellen[i].e5;
      let text = `${tankstellen[i].name} E5 preis is ${diffPreis} billeger  als unser Preis`;
      e5TextArray.push(text);
    }
    if ((tankstellen[i].e5 - tankstellen[0].e5).toFixed(2) > maxDiff) {
      let text = `Unser e5 Preis mehr als 0.01 cent billiger als ${tankstellen[i].name}`;
      e5TextArray.push(text);
    }
  }
  return e5TextArray;
};

const e10Vergleich = (tankstellen) => {
  let e10TextArray = [];
  const maxDiff = '0.01';
  if (tankstellen[1].e10 <= tankstellen[0].e10) {
    let text = " Unser E10 preis is teuerer oder gliech als AVIA's";
    e10TextArray.push(text);
  }
  for (let i = 1; i < tankstellen.length; i++) {
    if (tankstellen[i].e10 < tankstellen[0].e10) {
      let diffPreis = tankstellen[0].e10 - tankstellen[i].e10;
      let text = `${tankstellen[i].name} E10 preis is ${diffPreis} billeger  als unser Preis`;
      e10TextArray.push(text);
    }
    if ((tankstellen[i].e10 - tankstellen[0].e10).toFixed(2) > maxDiff) {
      let text = `Unser e10 Preis mehr als 0.01 cent billiger als ${tankstellen[i].name}`;
      e10TextArray.push(text);
    }
  }
  return e10TextArray;
};

export default preisVergleich;
