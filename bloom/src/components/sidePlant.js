import react, {useState} from 'react';
import PotImage from "../images/Side_HC.jpg"
import './Pot.scss';

export default function SidePlant() {
  return (
    <div className="potContainer"> 
<img src={PotImage} className="sidePlantHS"></img>
</div>
  );
}