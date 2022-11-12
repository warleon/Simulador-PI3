import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import CountButton from "../countButton/countButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import GameLogic from "../../gameLogic";

const clamp = (number, min, max) => Math.max(min, Math.min(number, max));
const dayDiff = (a, b) => {
  let Difference_In_Time = a.getTime() - b.getTime();
  return Math.round(Difference_In_Time / (1000 * 3600 * 24));
};

const Header = (props) => {
  const [percent, setPercent] = useState(0);

  const increase = (n) => {
    setPercent(clamp(percent + n, 0, 100));
  };

  const calcStress = () => {
    let point = 0;
    let actual = props.lists.current;
    console.log(actual);
    for(let i = 0 ; i < actual.lenght; i++){
      if(i === 1){
        for(let j = 0; j < i.lenght; j++){
        if(props.date <= 2){
          point =+ 3; 
        }else if(props.date > 4){
          point =+ 1;
        }
      }
      }else if(i === 2){
        for(let j = 0; j < i.length; j++){
          if(props.date <= 2){
            point =+ 5; 
          }else if(props.date > 4){
            point =+ 1;
          }
        }
      }else if( i === 3){
        for(let j = 0; j < i.length; j++){
          if(props.date <= 2){
            point =+ 5; 
          }else if(props.date > 4){
            point =+ 1;
          }
        }
      }else if(i === 4){
        for(let j = 0; j < i.length; j++){
          if(props.date <= 2){
            point =+ 5; 
          }else if(props.date <= 4){
            point =+ 3;
          }
        }
      }    
    };
    console.log(point);
  };

  return (
    <div className="header">
      <CountButton
        onClick={() => {
          increase(20); //increase day bar
          props.setDay(clamp(props.day.current + 1, 0, 5)); //incrase logic day
        }}
        max={5}
        start={0}
        message="Dia"
      ></CountButton>
      <div>
        Progress
        <ProgressBar percent={percent + "%"} />
      </div>
      <div>
        Stress
        <ProgressBar percent={percent + "%"} />
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
