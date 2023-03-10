import React from "react";
import "./styles.scss";
import addButton from "../images/add.png"
import GoalItem from "./GoalItem";

export default function GoalList(props) {
  return (
    <div className="GoalList">
<GoalItem />

    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src={addButton}
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
    </div>
  );
}