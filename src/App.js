import { useEffect, useState } from 'react';
import './App.css';

import Uppgift1 from "./uppgifter/1"
import Uppgift2 from "./uppgifter/2"
import Uppgift3 from "./uppgifter/3"
import Uppgift4 from "./uppgifter/4"
import Uppgift5 from "./uppgifter/5"
import Uppgift6 from "./uppgifter/6"
import Uppgift7 from "./uppgifter/7"

const URL = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0001/BE0001G/BE0001T100";


var jsonObj = 
        {
          query: [
            {
              code: "Tilltalsnamn",
              selection: {
                filter: "vs:NamnTilltalK100Får",
                values: [
                  "2Agnes",
                  "2Alice",
                  "2Anna"
                ]
              }
            }
          ],
          response: {
            format: "json"
          }
        }

function App() {
  const [Anna, setAnna] = useState([]);
  const [Agnes, setAgnes] = useState([]);
  const [Alice, setAlice] = useState([]);

  useEffect(() => {
    getter()
  }, [])

  async function getter() {
    await fetch(URL, {
      method: "POST",
      body: JSON.stringify(jsonObj),
      dataType: "json"})
    .then((response) => response.json())
    .then(data => {
      let Anna = [];
      let Agnes = [];
      let Alice = [];
      let i = 0;
      data.data.forEach(item => {
        let namn = item.key[0];
        let år = parseInt(item.key[1]);
        let antal = item.values[0];
        if (antal === "..") {
          antal = 0;
        } else {
          antal = parseInt(antal);
        }
        if (i <= 99) {
          Agnes.push({name: namn, year: år, amount: antal});
        } else if (i <= 199) {
          Alice.push({name: namn, year: år, amount: antal});
        } else if (i <= 299) {
          Anna.push({name: namn, year: år, amount: antal});
        }
        i = i + 1;
      });
      setAnna(Anna);
      setAgnes(Agnes);
      setAlice(Alice);
  })
  }

  return (
    <div className="App">
      <h1>Matmod projekt</h1>
      <h4>Namn: Anna Berg</h4>
      <h4>Akronym: anbj21</h4>
      <div className="body">
        <Uppgift1 Agnes={Agnes} Alice={Alice}Anna={Anna}/>
        <Uppgift2 Agnes={Agnes} Alice={Alice}Anna={Anna}/>
        <Uppgift3 Agnes={Agnes} Alice={Alice}Anna={Anna}/>
        <Uppgift4 Agnes={Agnes} Alice={Alice}Anna={Anna}/>
        <Uppgift5 Agnes={Agnes} Alice={Alice}Anna={Anna}/>
        <Uppgift6 Agnes={Agnes} Alice={Alice}Anna={Anna}/>
        <Uppgift7 Agnes={Agnes} Alice={Alice}Anna={Anna}/>
      </div>
    </div>
  );
}

export default App;
