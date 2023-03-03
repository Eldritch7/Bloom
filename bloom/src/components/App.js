import Plant1 from "./Plant1";
import GoalItem from "./GoalItem";
import SidePlant from "./sidePlant";
import "./App.scss";
import react, { useState } from "react";


function App() {

  return (
    <div className="App">
      <header className="Bloom-Header">
        <div className="all-content">
        <div className="topScrollBar">
          <p>topScrollBar</p>
          <SidePlant />
        </div>
        
        <div className="mainContent">
        <div className="side-bar-task-list">
<p>side-bar-task-list!</p>
<GoalItem />
        </div>
          <div className="mainContent-content">
        <Plant1 />
        <Plant1 />
        <Plant1 />
        <Plant1 />
        
        </div>
        <div className="seed-sidebar">
          <p>Seed-sidebar</p>
        </div>

        </div>
        
      </div>
      </header>
    </div>
  );
}

export default App;
