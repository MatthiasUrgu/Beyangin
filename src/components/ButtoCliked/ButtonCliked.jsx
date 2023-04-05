import s from "./style.module.scss";
import CardWeekly from "../CardWeekly/CardWeekly";
import AllCardYearly from '../AllCardYearly/AllCardYearly'
import AllCardWeekly from "../AllCardWeekly/AllCardWeekly";
import { useState } from "react";
function ButtonCliked() {
 const [isHovered, setIsHovered] = useState(false);
 
 const toggle = () => {
   setIsHovered(!isHovered);
 };
 console.log(isHovered);
 return (
  <div>
    <div className={s.toggleContainer}>
      <button className={s.buttonContainer} onClick={toggle}>
        <span
          className={`${s.first} ${isHovered ? "" : s.active}`}
          //isHovered est false
        >
          Yearly
        </span>
        <div className={s.middle}></div>
        <span
          className={`${s.second} ${isHovered ? s.active : ""}`}
          //isHovered est true
        >
          Monthly
        </span>
      </button>
    </div>
    {isHovered? <AllCardWeekly/>:<AllCardYearly/>}
  </div>
);
}

export default ButtonCliked;