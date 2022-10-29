import React from "react";
import PropTypes from "prop-types";
import "./list.css";
import { Container } from "@mui/material";
import { List as MuiList } from "@mui/material";
import { ItemTypes } from "../../constants";
import Task from "../task/task";
import useRefState from "../../useRefState";
import GameLogic from "../../gameLogic";

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
      }
      return { parentId: props.id };
    },
  }));
  function handleRemove(id) {
    const newList = childrenRef.current.filter((item) => item.id !== id);

    setChildren(newList);
  }
  const eraseChildren = () => {
    setChildren([]);
  };

  //add scoring and removal function
  switch (props.id) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    default:
    //do nothing
  }

  return (
    <MuiList
      sx={{ width: 1, height: 1, maxHeight: 1 }}
      ref={drop}
      style={{ maxHeight: "100%", overflow: "auto", padding: 0 }}
    >
      {children.map((child, i) => (
        <Task
          key={uuid()}
          parentId={props.id}
          {...child}
          remove={() => {
            handleRemove(child.id);
          }}
        ></Task>
      ))}
    </MuiList>
  );
};

List.propTypes = {};

List.defaultProps = {};

export default List;
