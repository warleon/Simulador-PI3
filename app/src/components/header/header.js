import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import CountButton from "../countButton/countButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import GameLogic from "../../gameLogic";

const clamp = (number, min, max) => Math.max(min, Math.min(number, max));

const Header = (props) => {
  const [percent, setPercent] = useState(0);

  const increase = (n) => {
    setPercent(clamp(percent + n, 0, 100));
  };

  //useEffect(() => {}, [percent]);
  return (
    <div className="header">
      <CountButton
        onClick={() => {
          increase(20);
          props.setDay(clamp(props.day.current + 1, 0, 5));
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
