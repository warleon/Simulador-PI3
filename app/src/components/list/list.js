import React from "react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./list.css";
import { Container } from "@mui/material";
import { List as MuiList } from "@mui/material";
import { ItemTypes } from "../../constants";
import Task from "../task/task";

import { useDrop } from "react-dnd";

const useRefState = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [state, stateRef, setState];
};

const List = (props) => {
  const [children, childrenRef, setChildren] = useRefState(
    props.children != undefined ? props.children : []
  );

  const [collected, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => {
      console.log(item);
      console.log(children);
      const result = [...childrenRef.current, item];
      console.log(result);
      setChildren(result);
    },
  }));

  return (
    <MuiList className="list" sx={{ width: 1, height: 1 }} ref={drop}>
      {children.map((child, i) => (
        <Task {...child}></Task>
      ))}
    </MuiList>
  );
};

List.propTypes = {};

List.defaultProps = {};

export default List;
