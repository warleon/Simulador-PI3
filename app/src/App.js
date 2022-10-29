import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "./components/list/list";
import PriorityMatrix from "./components/priorityMatrix/priorityMatrix";
import MainList from "./components/mainList/mainList";
import CountButton from "./components/countButton/countButton";
import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

import Task from "./components/task/task";
import { ItemTypes } from "./constants";
import { red } from "@mui/material/colors";

function App() {

  const[percent, setPercent] = useState(0);

  const increase = () => {
      if(percent + 10 > 100) return;
      setPercent(percent + 10);
  }

  const decrease = () => {
      if(percent - 10 < 0) return;
      setPercent(percent - 10);
  }

  useEffect(() => {
      console.log(percent);
  }, [percent]);

  return (
    
    <Grid
      container
      spacing={0}
      sx={{ width: "100vw", height: "100vh" }}
      className="App"
    >
      <Grid>
        <button onClick={increase}>Incrementar</button>
        <button onClick={decrease}>Disminuir</button>
        <ProgressBar percent={percent+ '%'} />
      </Grid>
      <Grid item sx={{ height: 15 / 100 }}>
        <CountButton message="dias pasados"></CountButton>
      </Grid>
      <Grid item container sx={{ height: 85 / 100 }}>
        <MainList></MainList>
        <PriorityMatrix></PriorityMatrix>
      </Grid>
    </Grid>
  );
}

export default App;
