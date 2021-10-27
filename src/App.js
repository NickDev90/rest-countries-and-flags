import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { ALL_COUNTRIES } from './config';

import Controls from './Components/Controls/Controls';
import List from './Components/Countries/List';
import Header from './Components/Header';
import Main from './Components/Main';
import Card from './Components/Countries/Card';


function App() {
  const [countries, setCountries] = useState([]);

  console.log(countries);

  useEffect( () => {
    axios.get(ALL_COUNTRIES)
    .then( ({data}) => setCountries(data))
  }, [])



  return (
    <>
    <Header/> 
    <Main>
      <Controls/>
      <List>
        {countries.map(c => {
          const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description: c.region.toLocaleString()
                },
                {
                  title: 'Capital',
                  description: c.capital.toLocaleString()
                },
              ]
            }
          return (
            <Card key={c.name} {...countryInfo}/>
          )
        }
        
        )}
      </List>
    </Main>
    </>
  );
}

export default App;
