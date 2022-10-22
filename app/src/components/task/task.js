import React, {useState} from "react";
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
      prevParentId: props.parentId,
    },
    end: (item, monitor) => {
      if (monitor.didDrop())
        if (props.parentId !== monitor.getDropResult()["parentId"])
          props.remove();
    },
  }));
  const [changeColor, setChangeColor] =useState()

  const handleClick = () => {
      const randomColors =  '#' + Math.random().toString(16).slice(2,8)
      setChangeColor(randomColors)
  }
  console.log('color', changeColor)
  return (
    <ListItem style={{backgroundColor:`${changeColor}`}} onClick={handleClick} className="task" ref={drag} {...collected}>
      <section>
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.date}</div>
      </section>
    
    </ListItem>
  );
};

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
