import Plant1 from "./Plant1";
import Pot from "./Pot";
import "./App.css";
import react, { useState } from "react";


function App() {

  return (
    <div className="App">
      <header className="Bloom-Header">
        <Plant1 />
        <Plant1 />
        <Plant1 />
        <Pot />
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
