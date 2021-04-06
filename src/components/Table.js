import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import getTankstelleData from './getTankstellePriceData';
import preisVergleich from './vergleichPreis';

//const getTankstelleData = require('./getTankstellePreis');

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
const URL = 'https://creativecommons.tankerkoenig.de/json/prices.php?ids=';
const senftlID = 'be1ba733-ca15-4638-8618-b5c4ccba8e72,';
const aviaID = 'd98b72c0-8ded-4649-999c-2955dff45744,';
const aralID = '52a23abe-c517-4964-ab2b-40986dd654ad,';
const agipID = '91ffe312-b617-42a3-91ca-f77128657b74,';
const omvID = 'ad0b74df-5cc4-4eb4-b2c4-d1a0aa5e0ac3&';
const apiKEY = 'apikey=1ac888c8-0393-a06b-0eb0-ed1997606ec0';
const completeURL = URL + senftlID + aviaID + aralID + agipID + omvID + apiKEY;
const sweetAlarm = (ErrorText) => {
  Swal.fire({
    title: `<p style="color:white;">Achtung !</p>`,
    html: `<p style="color:white;font-size:30px;">${ErrorText}</p>`,
    ErrorText,
    width: 1000,
    padding: '3em',
    background: '#ff0000',
    //timer: 50000,
    icon: 'warning',
    backdrop: `
    rgba(255, 99, 71, 0.8)    `,
  });
};
const PriceTable = () => {
  const [aTankstelle, aSetTankstelle] = useState([]);
  const [date, setDate] = useState('');

  const getTankstelleProps = async () => {
    axios.get(completeURL).then((resp) => {
      let tankstellenProps = getTankstelleData(resp.data);
      aSetTankstelle(tankstellenProps);
      let tankstellenVergleichResultat = preisVergleich(tankstellenProps);
      if (tankstellenVergleichResultat.length > 0) {
        let completedHTML = '';
        let htmlText = '<p>';
        let htmlTextEnd = '</p>';
        let htmlBreak = '<br>';
        for (let i = 0; i < tankstellenVergleichResultat.length; i++) {
          /*  if (i === 0) {
            completedHTML =
              htmlText + tankstellenVergleichResultat[i] + htmlBreak;
          } else if (i === tankstellenVergleichResultat.length - 1) {
            completedHTML += tankstellenVergleichResultat[i] + htmlTextEnd;
          } else {
            completedHTML += tankstellenVergleichResultat[i] + htmlBreak;
          } */
          completedHTML += tankstellenVergleichResultat[i] + htmlBreak;
        }
        sweetAlarm(completedHTML);
      }
      var now = new Date();
      setDate(now.toLocaleString());
    });
  };
  useEffect(() => {
    getTankstelleProps();
    const interval = setInterval(() => {
      getTankstelleProps();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ui segment">
      {/*      <button className="ui button" onClick={() => setCount(count + 1)}>
        Click Here
      </button> */}
      <p>Letzte aktualisierung: {date} </p>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>tankstelle</TableCell>
              <TableCell align="right">diesel preis</TableCell>
              <TableCell align="right">e5 preis</TableCell>
              <TableCell align="right">e10 preis</TableCell>
              <TableCell align="right">adresse</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aTankstelle.map((tankstelle) => {
              return (
                <TableRow key={tankstelle.name}>
                  <TableCell component="th" scope="row">
                    {tankstelle.name}
                  </TableCell>
                  <TableCell align="right">{tankstelle.diesel}</TableCell>
                  <TableCell align="right">{tankstelle.e5}</TableCell>
                  <TableCell align="right">{tankstelle.e10}</TableCell>
                  <TableCell align="right">{tankstelle.adresse}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PriceTable;
