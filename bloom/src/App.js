import logo from './logo.svg';
import './App.css';
//images
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';

function App() {
  return (
    <div className="App">
      <header className="Bloom-Header">
        <img src={four} className="image"></img>
      {/* <header className="App-header">
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
      </header> */}
      </header>
    </div>
  );
}

export default App;
