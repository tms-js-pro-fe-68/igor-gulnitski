import logo from './logo.svg'
import './App.css'
import ColorButton from './components/ColorButton';
import CountButton from './components/CountButton';



function App({ prop1 }) {
  return (
    <div className="App">
      <header className="App-header">
        {prop1}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <p>
          <CountButton />
          <ColorButton />
        </p>
      </header>
    </div>
  )
}

export default App
