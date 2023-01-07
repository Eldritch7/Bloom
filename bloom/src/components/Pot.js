import react, {useState} from 'react';
import PotImage from "../images/placeholderPot.png"
import './Pot.scss';

export default function Pot() {
  return (
    <div className="potContainer"> 
<img src={PotImage} className="potImage"></img>
</div>
  );
}