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
//Tasks
let tasks = {
  1: {
    id: 1,
    goal_id: 1,
    text: "Go running 30mins",
    completed: false,
    created_at: null
  },
  2: {
    id: 2,
    goal_id: 1,
    text: "Stretching",
    completed: false,
    created_at: null
  },
  3: {
    id: 3,
    goal_id: 1,
    text: "Push-ups",
    completed: false,
    created_at: null
  },
  4: {
    id: 4,
    goal_id: 2,
    text: "Find reference",
    completed: true,
    created_at: null
  },
  5: {
    id: 5,
    goal_id: 2,
    text: "sketch",
    completed: true,
    created_at: null
  },
  6: {
    id: 6,
    goal_id: 2,
    text: "Ink",
    completed: true,
    created_at: null
  },
  7: {
    id: 7,
    goal_id: 2,
    text: "Colour",
    completed: true,
    created_at: null
  }
}


//Goals
let goals = {
  1: {
    id: 1,
    plant_type_id: 1,
    goal_name: "Exercise",
    is_active: true

  },
  2: {
    id: 2,
    plant_type_id: 2,
    goal_name: "Draw a Plant",
    is_active: false
  }
}
//Plant Type
let plant_type = {
  1: {
    id: 1,
    plantName: 'Green Haworthia Cooperi'
    
  },
  2: {
    id: 2,
    plantName: 'Blue Haworthia Cooperi'
  }
}

//Plant Images
let plant_images = {
  1: {
    id: 1,
    plantType_id: 1,
    order: 1,
    image: one
  },
  2: {
    id: 2,
    plantType_id: 1,
    order: 2,
    image: two
  },
  3: {
    id: 3,
    plantType_id: 1,
    order: 3,
    image: three
  },
  4: {
    id: 4,
    plantType_id: 1,
    order: 4,
    image: four
  },
  5: {
    id: 5,
    plantType_id: 1,
    order: 5,
    image: five
  },
  6: {
    id: 6,
    plantType_id: 2,
    order: 1,
    image: one
  },
  7: {
    id: 7,
    plantType_id: 2,
    order: 2,
    image: two2
  },
  8: {
    id: 8,
    plantType_id: 2,
    order: 3,
    image: three2
  },
  9: {
    id: 1,
    plantType_id: 2,
    order: 4,
    image: four2
  },
  10: {
    id: 10,
    plantType_id: 2,
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
