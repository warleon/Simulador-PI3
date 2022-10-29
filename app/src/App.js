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
      sx={{ width: "100vw", height: "100vh", backgroundColor: 'white' }}
      className="App"

    >
      <Grid className="botones"  sx={{width:"25%"}}>
        <button className="btn-dis" onClick={decrease}>Disminuir</button>
        <button className="btn-inc" onClick={increase}>Incrementar</button>
        <ProgressBar percent={percent + '%'} />
        <CountButton></CountButton>
      </Grid>
    
      <Grid item container sx={{ height: 85 / 100 }}>
        <MainList></MainList>
        <PriorityMatrix></PriorityMatrix>
      </Grid>
    </Grid>
  );
}

export default App;
