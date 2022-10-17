import React from "react";
import PropTypes from "prop-types";
import "./task.css";
import { Container } from "@mui/material";
import { useDrag } from "react-dnd";
import ListItem from "@mui/material/ListItem";
import { ItemTypes } from "../../constants";

const Task = (props) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: props,
    end: () => {
      console.log("end of drag");
    },
  }));
  return (
    <ListItem className="task" key={props.key} ref={drag} {...collected}>
      <div>{props.id}</div>
      <div>{props.name}</div>
      <div>{props.date}</div>
    </ListItem>
  );
};

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
