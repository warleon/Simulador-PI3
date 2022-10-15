import React from "react";
import PropTypes from "prop-types";
import "./task.css";
import { Container } from "@mui/material";

const Task = (props) => (
  <Container className="task">
    <div>{props.id}</div>
    <div>{props.name}</div>
    <div>{props.date}</div>
  </Container>
);

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
