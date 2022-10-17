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
    item: {
      id: props.id,
      name: props.name,
      date: props.date,
    },
    end: (item, monitor) => {
      if (monitor.didDrop()) props.remove();
    },
  }));
  return (
    <ListItem className="task" ref={drag} {...collected}>
      <div>{props.id}</div>
      <div>{props.name}</div>
      <div>{props.date}</div>
    </ListItem>
  );
};

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
