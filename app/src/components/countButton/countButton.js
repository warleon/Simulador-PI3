import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./countButton.css";
import Button from "@mui/material/Button";

const CountButton = (props) => {
  const [count, setCount] = useState(props.start);
  const clamp = (number, min, max) => Math.max(min, Math.min(number, max));
  function handleClick() {
    props.onClick();
    setCount(clamp(count + 1, 0, props.max));
  }

  return (
    <button className="btn-dias" onClick={handleClick}>
      {props.message}:{count}{" "}
    </button>
  );
};

CountButton.propTypes = {};

CountButton.defaultProps = {};

export default CountButton;
