import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "./components/list/list";
import PriorityMatrix from "./components/priorityMatrix/priorityMatrix";

import Task from "./components/task/task";
import { ItemTypes } from "./constants";
import { red } from "@mui/material/colors";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function App() {
  const date = new Date();
  const dateString =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  let items = [...Array(6).keys()].map((_, i) => ({
    id: i,
    name: "curso " + i,
    date: randomDate(new Date("2022/07/10"), new Date("2022/10/22")),
    color: "red",
  }));
  return (
    <Grid
      container
      spacing={0}
      sx={{ width: "100vw", height: "100vh" }}
      className="App"
    >
      <Grid
        item
        className="cursos"
        md={3}
        sx={{
          width: 1,
          height: 1,
          minHeight: 1,
          border: 1,
        }}
      >
        <List id={0} sx={{ height: 1 }}>
          {items}
        </List>
      </Grid>
      <PriorityMatrix></PriorityMatrix>
    </Grid>
  );
}

export default App;
