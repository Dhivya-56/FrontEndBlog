import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyApp/>
      <MyButton/>
      </header>
    
    </div>
  );
 
}
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function MyApp(){
  return (
    <p>This is paragraph</p>
  )
}

export default App;
