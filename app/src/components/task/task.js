import React, { useState } from "react";
import PropTypes from "prop-types";
import "./task.css";
import { Container } from "@mui/material";
import { useDrag } from "react-dnd";
import ListItem from "@mui/material/ListItem";
import { ItemTypes } from "../../constants";

function formatDate(date) {
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

const getColorFromDate = (date) => {
  let currentDate = new Date();
  let Difference_In_Time = currentDate.getTime() - date.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  let diff = Math.round(Difference_In_Days);
  if (diff <= 2) return "red";
  if (diff <= 4) return "yellow";
  return "green";
};
const Task = (props) => {
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

  const handleClick = () => {
    const randomColors = "#" + Math.random().toString(16).slice(2, 8);
  };
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
        <div>{formatDate(props.date)}</div>
      </section>
    </ListItem>
  );
};

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
