import React from "react";
import PropTypes from "prop-types";
import "./list.css";
import { List as MuiList } from "@mui/material";
import { ItemTypes } from "../../constants";
import Task from "../task/task";
import useRefState from "../../useRefState";

import { useDrop } from "react-dnd";
import { v4 as uuid } from "uuid";

const List = (props) => {
  const [collected, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => {
      if (item.prevParentId !== props.id) {
        delete item.prevParentId;
        let newLists = props.lists.current;
        let result = [...newLists[props.id], item];
        newLists[props.id] = result;
        let listscopy = [...newLists];
        props.setLists(listscopy);
      }
      return { parentId: props.id };
    },
  }));
  function handleRemove(id, pid) {
    const newList = props.lists.current[pid].filter((item) => item.id !== id);
    let newLists = props.lists.current;
    newLists[pid] = newList;
    let listscopy = [...newLists];
    props.setLists(listscopy);
    //props.setLists(newLists);
  }

  return (
    <MuiList
      sx={{ width: 1, height: 1, maxHeight: 1 }}
      ref={drop}
      style={{ maxHeight: "100%", overflow: "auto", padding: 0 }}
    >
      {props.lists.current[props.id].map((child, i) => (
        <Task
          day={props.day}
          key={uuid()}
          parentId={props.id}
          {...child}
          remove={() => {
            handleRemove(child.id, props.id);
          }}
        ></Task>
      ))}
    </MuiList>
  );
};

List.propTypes = {};

List.defaultProps = {};

export default List;
