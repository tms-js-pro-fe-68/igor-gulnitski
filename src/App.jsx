import logo from './logo.svg'
import './App.css'
import ColorButton from './components/ColorButton';
import CatFact from './components/CatFact';
import Back from './components/Back';
import ButtonPassword from './components/ButtonPassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {prop1} */}
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonPassword />
        <CatFact />
        <ColorButton />
        <Back />
      </header>
    </div>
  )
}

export default App;
