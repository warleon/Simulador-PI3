import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "./components/list/list";
import PriorityMatrix from "./components/priorityMatrix/priorityMatrix";
import MainList from "./components/mainList/mainList";

import Task from "./components/task/task";
import { ItemTypes } from "./constants";
import { red } from "@mui/material/colors";

function App() {
  return (
    <Grid
      container
      spacing={0}
      sx={{ width: "100vw", height: "100vh" }}
      className="App"
    >
      <MainList></MainList>
      <PriorityMatrix></PriorityMatrix>
    </Grid>
  );
}

export default App;
