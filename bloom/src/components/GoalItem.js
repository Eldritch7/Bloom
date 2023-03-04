import react, {useState} from 'react';
import './GoalItem.scss';
import TaskItem from './TaskItem';

export default function GoalItem(props) {
  return (
    <div className="Goal Item"> 
<h2 className = "Goal Name"> GOAL NAME PlACEHOLDER in GoalItem</h2>
<TaskItem />
<TaskItem />
</div>
  );
}