import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "./components/list/list";

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
        <List id={0} sx={{ height: "100vh" }}>
          {items}
        </List>
      </Grid>
      <Grid item container md={9} direction="column">
        <Grid container sx={{ height: 3 / 200 }}>
          <Grid item className="hiddenHorizontal">
            A
          </Grid>
          <Grid
            item
            className="div-horizontal"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
            md={true}
          >
            IMPORTANTE
          </Grid>
          <Grid
            item
            className="div-horizontal"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
            md={true}
          >
            NO IMPORTANTE
          </Grid>
        </Grid>
        <Grid container sx={{ height: 24 / 100 }}>
          <Grid item className="div-vertical" sx={{ height: 1, border: 1 }}>
            URGENTE
          </Grid>
          <Grid
            item
            className="primero"
            sx={{ height: 1, border: 1 }}
            md={true}
          >
            <List id={1}></List>
          </Grid>
          <Grid
            item
            className="segundo"
            sx={{ height: 1, border: 1 }}
            md={true}
          >
            <List id={2}></List>
          </Grid>
        </Grid>
        <Grid container sx={{ height: 24 / 100 }}>
          <Grid item className="div-vertical" sx={{ height: 1, border: 1 }}>
            NO URGENTE
          </Grid>
          <Grid
            item
            className="tercero"
            sx={{ height: 1, border: 1 }}
            md={true}
          >
            <List id={3}></List>
          </Grid>
          <Grid item className="cuarto" sx={{ height: 1, border: 1 }} md={true}>
            <List id={4}></List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
