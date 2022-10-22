import React, {useState} from "react";
import PropTypes from "prop-types";
import "./task.css";
import { Container } from "@mui/material";
import { useDrag } from "react-dnd";
import ListItem from "@mui/material/ListItem";
import { ItemTypes } from "../../constants";


function formatDate(date){
   return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
}

const getColorFromDate=(date)=>{
  let inputDate = date
  let currentDate = new Date()
  var Difference_In_Time = currentDate.getTime() - inputDate.getTime()
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var diff = Math.round(Difference_In_Days)
  console.log(currentDate.getTime())
  if(diff<=7)return "red"
  if(diff<=14)return "yellow"
  return "green"
}
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
      const randomColors =  '#' + Math.random().toString(16).slice(2,8)
  }
  return (
    <ListItem style={{backgroundColor:`${getColorFromDate(props.date)}`}} onClick={handleClick} className="task" ref={drag}>
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
