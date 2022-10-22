import React from "react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./list.css";
import { Container } from "@mui/material";
import { List as MuiList } from "@mui/material";
import { ItemTypes } from "../../constants";
import Task from "../task/task";

import { useDrop } from "react-dnd";
import { v4 as uuid } from "uuid";

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

  let btn = null
  if(props.id === 0)btn=<button>boton</button>


  return (
    <Container>
      {btn}
      <MuiList
        className="list"
        sx={{ width: 1, height: 1, maxHeight: 1, overflow: "auto" }}
        ref={drop}
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
    </Container>
  );
};

List.propTypes = {};

List.defaultProps = {};

export default List;
