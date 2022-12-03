import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import CountButton from "../countButton/countButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import List from "../list/list";
import Grid from "@mui/material/Grid";
import Popup from "../popup/popup";

const clamp = (number, min, max) => Math.max(min, Math.min(number, max));
const dayDiff = (a, b) => {
  let Difference_In_Time = a.getTime() - b.getTime();
  return Math.round(Difference_In_Time / (1000 * 3600 * 24));
};

const Header = (props) => {
  const [percent, setPercent] = useState(0);
  const [stress, setStress] = useState(0);
  const [task, setTask] = useState(props.getTask(props.day.current));
  const [accept, setAccept] = useState(false);
  const [popuptasks, setButtonPopUpTasks] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const increase = (n) => {
    setPercent(clamp(percent + n, 0, 100));
  };
  useEffect(() => {
    const token = setTimeout(() => {
      props.setList(6, props.getTask());
    }, 1000 * 1);
    return function cleanUp() {
      clearTimeout(token);
    };
  });

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
          setAccept(false);
          setTask(props.getTask(props.day.current));
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
      <div>
        <button className="btn-NT" onClick={() => setButtonPopUpTasks(true)}>
          New Tasks
        </button>
        <Popup trigger={popuptasks} setTrigger={setButtonPopUpTasks}>
          <List
            id={6}
            sx={{ height: 1 }}
            setLists={props.setLists}
            lists={props.lists}
            day={props.day}

          ></List>
        </Popup>
        <button className="completed" onClick={() => setButtonPopup(true)}>
          Completed Tasks
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <List
            id={5}
            sx={{ height: 1 }}
            setLists={props.setLists}
            lists={props.lists}
            day={props.day}
          ></List>
        </Popup>
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
