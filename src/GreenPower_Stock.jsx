import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

const outer = {
  backgroundImage: 'linear-gradient(to bottom right,LightSlateGrey, lightgrey)',
};

const heading = {
  color: 'white',
  backgroundColor: 'LightSlateGrey',
  textAlign: 'center',
  fontSize: 32,
  paddingTop: 5,
  paddingBottom: 10,

};

function Stock() {
  const [resp, setResp] = useState({
    columns: [
      {
        label: 'Open',
        field: '1. open',
      },
      {
        label: 'High',
        field: '2. high',
      },
      {
        label: 'Low',
        field: '3. low',
      },
      {
        label: 'Close',
        field: '4. close',
      },
      {
        label: 'Volume',
        field: '5. volume',
      },
    ],
  });

  useEffect(() => {
    if (resp) console.log(resp);
  }, [resp]);
  useEffect(() => {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GPV.TRV&outputsize=full&apikey=demo')
      .then((response) => {
        setResp({ columns: resp.columns, rows: (Object.values(response.data['Time Series (Daily)'])).map(item => item) });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 style={heading}>GreenPower Stock Data</h1>
      <div style={outer}>
        <MDBDataTable
          data={resp}
          striped
          bordered
          hover
          searching={false}
        />
      </div>
    </div>
  );
}

export default Stock;
