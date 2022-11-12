import React from "react";
import PropTypes from "prop-types";
import "./task.css";
import { useDrag } from "react-dnd";
import ListItem from "@mui/material/ListItem";
import { ItemTypes } from "../../constants";

const Task = (props) => {
  const getColorFromDate = (date) => {
    let diff = date - props.day;
    if (diff <= 2) return "red";
    if (diff <= 4) return "yellow";
    return "green";
  };
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: {
      id: props.id,
      name: props.name,
      date: props.date,
      prevParentId: props.parentId,
    },
    end: (item, monitor) => {
      if (monitor.didDrop())
        if (props.parentId !== monitor.getDropResult()["parentId"])
          props.remove();
    },
  }));

  const handleClick = () => {};
  return (
    <ListItem
      style={{ backgroundColor: `${getColorFromDate(props.date)}` }}
      onClick={handleClick}
      className="task"
      ref={drag}
    >
      <section>
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>Deadline: {props.date}</div>
      </section>
    </ListItem>
  );
};

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
