import logo from './logo.svg'
import './App.css'
import ColorButton from './components/ColorButton';
import CatFact from './components/CatFact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {prop1}
        <img src={logo} className="App-logo" alt="logo" /> */}
        <CatFact />
        <ColorButton />
      </header>
    </div>
  )
}

export default App;
