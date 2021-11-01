import { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Header from './Components/Header';
import Main from './Components/Main';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import NotFound from './Pages/NotFound';


function App() {

  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header/> 
      <Main>
        <Switch>
          <Route exact path='/'>
            <HomePage countries={countries} setCountries={setCountries}/>
          </Route>
          <Route path='/country/:name' component={DetailsPage} />
          <Route component={NotFound}/>
        </Switch>  
      </Main>
    </>
  );
}

export default App;
