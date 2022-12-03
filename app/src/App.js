import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "./components/list/list";
import PriorityMatrix from "./components/priorityMatrix/priorityMatrix";
import MainList from "./components/mainList/mainList";
import Header from "./components/header/header";
import { useEffect, useState } from "react";
import useRefState from "./useRefState";
import Popup from "./components/popup/popup";
function randTask(i) {
  return {
    id: i,
    name: "curso " + i,
    //todo que la fecha sea entre hoy y 7 dias en adelante
    date: Math.floor(Math.random() * 7) + 1,
    color: "red",
  };
}

const items = [...Array(6).keys()].map((_, i) => randTask(i));

function App() {
  const [day, dayRef, setDay] = useRefState(0);
  const [score, scoreRef, setScore] = useRefState(0);
  const [lists, listsRef, setLists] = useRefState([
    items, //initial tasks 0
    [], // first cuadrant 1
    [], // second cuadrant 2
    [], // third cuadrant 3
    [], // fourth cuadrant 4
    [], // completed tasks 5
    [], // new tasks 6
  ]);
  const addToList = (i, obj) => {
    let newLists = listsRef.current;
    let result = [...newLists[i], obj];
    newLists[i] = result;
    let listscopy = [...newLists];
    setLists(listscopy);
  };
  const removeOutdated = () => {
    let curLists = listsRef.current;
    for (let i = 1; i < 5; i++) {
      for (let j = 0; j < curLists[i].length; j++) {
        if (curLists[i][j].date > day) {
          addToList(5, curLists[i][j]);
          curLists[i].splice(j, 1);
          j -= 1;
        }
      }
    }
  };

  return (
    <Grid
      container
      spacing={0}
      sx={{ width: "100vw", height: "100vh", backgroundColor: "white" }}
      className="App"
    >
      <Grid className="botones" sx={{ width: 8 / 10 }}>
        <Header
          lists={listsRef}
          score={score}
          day={dayRef}
          setDay={setDay}
          setList={addToList}
          setLists={setLists}
          getTask={randTask}
        ></Header>
      </Grid>

      <Grid item container sx={{ height: 85 / 100 }}>
        <MainList
          lists={listsRef}
          setLists={setLists}
          day={day}
          score={scoreRef}
          setScore={setScore}
        ></MainList>
        <PriorityMatrix
          day={day}
          lists={listsRef}
          setLists={setLists}
        ></PriorityMatrix>
      </Grid>
    </Grid>
  );
}

export default App;
