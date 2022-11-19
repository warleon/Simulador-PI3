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
const items = [...Array(10).keys()].map((_, i) => ({
  id: i,
  name: "curso " + i,
  //todo que la fecha sea entre hoy y 7 dias en adelante
  date: Math.floor(Math.random() * 5) + 1,
  color: "red",
}));

function App() {
  const [day, dayRef, setDay] = useRefState(0);
  const [score, scoreRef, setScore] = useRefState(0);
  const [lists, listsRef, setLists] = useRefState([items, [], [], [], []]);
  const [buttonPopup, setButtonPopup] = useState(false);
  useEffect(() => {
    console.log(listsRef.current);
  }, [lists]);

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
