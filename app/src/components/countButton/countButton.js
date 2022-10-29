import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./countButton.css";
import Button from "@mui/material/Button";


const CountButton = (props) => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Button onClick={handleClick}>
      {" "}
      {props.message}:{count}{" "}
    </Button>
  );
};

CountButton.propTypes = {};

CountButton.defaultProps = {};

export default CountButton;
