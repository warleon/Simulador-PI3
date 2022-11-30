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

const items = [...Array(10).keys()].map((_, i) => randTask(i));

function App() {
  const [day, dayRef, setDay] = useRefState(0);
  const [score, scoreRef, setScore] = useRefState(0);
  const [lists, listsRef, setLists] = useRefState([items, [], [], [], []]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const addNewTask = () => {};
  useEffect(() => {
    const token = setTimeout(addNewTask, 1000 * 13);
    return function cleanUp() {
      clearTimeout(token);
    };
  });
  const addToList = (i, obj) => {
    let newLists = listsRef.current;
    let result = [...newLists[i], obj];
    newLists[i] = result;
    let listscopy = [...newLists];
    setLists(listscopy);
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
          setLists={setLists}
          getTask={randTask}
        ></Header>
        <button className="completed" onClick={() => setButtonPopup(true)}>
          Completed Tasks
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
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
