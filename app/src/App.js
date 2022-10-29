import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "./components/list/list";
import PriorityMatrix from "./components/priorityMatrix/priorityMatrix";
import MainList from "./components/mainList/mainList";
import Header from "./components/header/header";
import { useEffect, useState } from "react";

function App() {
  return (
    <Grid
      container
      spacing={0}
      sx={{ width: "100vw", height: "100vh", backgroundColor: "white" }}
      className="App"
    >
      <Grid className="botones" sx={{ width: 8 / 10 }}>
        <Header></Header>
      </Grid>

      <Grid item container sx={{ height: 85 / 100 }}>
        <MainList></MainList>
        <PriorityMatrix></PriorityMatrix>
      </Grid>
    </Grid>
  );
}

export default App;
