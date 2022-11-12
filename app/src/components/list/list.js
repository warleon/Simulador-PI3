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
  const [children, childrenRef, setChildren] = useRefState(
    props.children !== undefined ? props.children : []
  );

  const [collected, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => {
      if (item.prevParentId !== props.id) {
        delete item.prevParentId;
        const result = [...childrenRef.current, item];
        setChildren(result);
        let newLists = props.lists.current;
        newLists[props.id] = result;
        props.setLists(newLists);
      }
      return { parentId: props.id };
    },
  }));
  function handleRemove(id, pid) {
    const newList = childrenRef.current.filter((item) => item.id !== id);
    setChildren(newList);
    let newLists = props.lists.current;
    newLists[pid] = newList;
    props.setLists(newLists);
  }

  return (
    <MuiList
      sx={{ width: 1, height: 1, maxHeight: 1 }}
      ref={drop}
      style={{ maxHeight: "100%", overflow: "auto", padding: 0 }}
    >
      {children.map((child, i) => (
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
