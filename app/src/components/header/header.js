import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import CountButton from "../countButton/countButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useState } from "react";

const clamp = (number, min, max) => Math.max(min, Math.min(number, max));
const dayDiff = (a, b) => {
  let Difference_In_Time = a.getTime() - b.getTime();
  return Math.round(Difference_In_Time / (1000 * 3600 * 24));
};

function randTask(i) {
  return {
    id: i,
    name: "curso " + i,
    //todo que la fecha sea entre hoy y 7 dias en adelante
    date: Math.floor(Math.random() * 5) + 1,
    color: "red",
  };
}
const Header = (props) => {
  const [percent, setPercent] = useState(0);
  const [stress, setStress] = useState(0);

  const increase = (n) => {
    setPercent(clamp(percent + n, 0, 100));
  };

  const calcStress = () => {
    let point = 0;
    let actual = props.lists.current;
    console.log(actual);
    for (let j = 0; j < actual[1].lenght; j++) {
      let diff = actual[1][j].date - props.day.current;
      if (diff <= 2) {
        point += 3;
      } else if (diff > 4) {
        point += 1;
      }
    }
    for (let j = 0; j < actual[2].length; j++) {
      let diff = actual[2][j].date - props.day.current;
      if (diff <= 2) {
        point += 5;
      } else if (diff > 4) {
        point += 1;
      }
    }
    for (let j = 0; j < actual[3].length; j++) {
      let diff = actual[3][j].date - props.day.current;
      if (diff <= 2) {
        point += 5;
      } else if (diff > 4) {
        point += 1;
      }
    }
    for (let j = 0; j < actual[4].length; j++) {
      let diff = actual[4][j].date - props.day.current;
      if (diff <= 2) {
        point += 5;
      } else if (diff <= 4) {
        point += 3;
      }
    }
    setStress(clamp(stress + point, 0, 100));
    console.log(stress);
  };

  return (
    <div className="header">
      <CountButton
        onClick={() => {
          increase(20); //increase day bar
          props.setDay(clamp(props.day.current + 1, 0, 5)); //incrase logic day
          calcStress();
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
        <ProgressBar percent={stress + "%"} />
      </div>
      <button
        onClick={() => {
          let t = randTask(10);
          let newLists = props.lists.current;
          let result = [...newLists[0], t];
          newLists[0] = result;
          let listscopy = [...newLists];
          props.setLists(listscopy);
        }}
      >
        Add Task
      </button>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
