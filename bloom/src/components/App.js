import Plant1 from "./Plant1";
import Pot from "./Pot";
import "./App.scss";
import react, { useState } from "react";


function App() {

  return (
    <div className="App">
      <header className="Bloom-Header">
        <div className="all-content">
        <div className="topScrollBar">
          <p>topScrollBar</p>
        </div>
        
        <div className="mainContent">
        <div className="side-bar-task-list">
<p>side-bar-tastk-list!</p>
        </div>
          <div className="mainContent-content">
        <Plant1 />
        <Plant1 />
        <Plant1 />
        <Plant1 />
        <Pot />
        <Pot />
        </div>
        </div>
        
      </div>
      </header>
    </div>
  );
}

export default App;
