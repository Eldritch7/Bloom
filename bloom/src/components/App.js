import Plant1 from "./Plant1";
import GoalItem from "./GoalItem";
import SidePlant from "./sidePlant";
import GoalList from "./GoalList";
import "./App.scss";
import react, { useState } from "react";

//Images
import one from "../images/Resizing.jpg";
import two from "../images/Resizing 2.jpg";
import three from "../images/Resizing 3.jpg";
import four from "../images/Resizing 4.jpg";
import five from "../images/Resizing 5.jpg";
import one2 from "../images/Resizing.jpg";
import two2 from "../images/Blue2.jpg";
import three2 from "../images/Blue3.jpg";
import four2 from "../images/Blue4.jpg";
import five2 from "../images/Blue5.jpg";



//Mock Data
let images = {
  1: {
    id: 1,
    plantType: "GreenHC",
    order: 1,
    image: one
  },
  2: {
    id: 2,
    plantType: "GreenHC",
    order: 2,
    image: two
  },
  3: {
    id: 3,
    plantType: "GreenHC",
    order: 3,
    image: three
  },
  4: {
    id: 4,
    plantType: "GreenHC",
    order: 4,
    image: four
  },
  5: {
    id: 5,
    plantType: "GreenHC",
    order: 5,
    image: five
  },
  6: {
    id: 6,
    plantType: "BlueHC",
    order: 1,
    image: one
  },
  7: {
    id: 7,
    plantType: "BlueHC",
    order: 2,
    image: two2
  },
  8: {
    id: 8,
    plantType: "BlueHC",
    order: 3,
    image: three2
  },
  9: {
    id: 1,
    plantType: "BlueHC",
    order: 4,
    image: four2
  },
  10: {
    id: 10,
    plantType: "BlueHC",
    order: 5,
    image: five2
  }
}


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
<GoalList />

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
