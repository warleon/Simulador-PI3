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

function App() {
  const [day, dayRef, setDay] = useRefState(0);
  useEffect(() => {
    console.log(day);
  }, [day]);
  const [score, scoreRef, setScore] = useRefState(0);
  return (
    <Grid
      container
      spacing={0}
      sx={{ width: "100vw", height: "100vh", backgroundColor: "white" }}
      className="App"
    >
      <Grid className="botones" sx={{ width: 8 / 10 }}>
        <Header score={score} day={dayRef} setDay={setDay}></Header>
      </Grid>

      <Grid item container sx={{ height: 85 / 100 }}>
        <MainList day={day} score={scoreRef} setScore={setScore}></MainList>
        <PriorityMatrix></PriorityMatrix>
      </Grid>
    </Grid>
  );
}

export default App;
