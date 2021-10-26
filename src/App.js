import './App.css';
import Controls from './Components/Controls/Controls';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <>
    <Header/> 
    <Main>
      <Controls/>
    </Main>
    </>
  );
}

export default App;
