import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "./components/list/list";

import Task from "./components/task/task";
import { ItemTypes } from "./constants";

function App() {
  const date = new Date();
  const dateString =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  let items = [...Array(7).keys()].map((_, i) => ({
    id: i,
    name: "curso " + i,
    date: dateString,
  }));
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100vw", height: "100vh" }}
      className="App"
      columns={12}
    >
      <Grid
        item
        className="cursos"
        md={3}
        sx={{
          width: 1,
          height: 1,
          border: 1,
        }}
      >
        <List>{items}</List>
      </Grid>
      <Grid item container md={9} direction="column">
        <Grid container sx={{ height: 2 / 100 }}>
          <Grid item md={1 / 3}></Grid>
          <Grid
            item
            className="div-horizontal"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
          >
            IMPORTANTE
          </Grid>
          <Grid
            item
            className="div-horizontal"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
          >
            NO IMPORTANTE
          </Grid>
        </Grid>
        <Grid container sx={{ height: 23 / 100 }}>
          <Grid item className="div-vertical" sx={{ height: 1, border: 1 }}>
            URGENTE
          </Grid>
          <Grid
            item
            className="primero"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
          >
            <List></List>
          </Grid>
          <Grid
            item
            className="segundo"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
          >
            <List></List>
          </Grid>
        </Grid>
        <Grid container sx={{ height: 23 / 100 }}>
          <Grid item className="div-vertical" sx={{ height: 1, border: 1 }}>
            NO URGENTE
          </Grid>
          <Grid
            item
            className="tercero"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
          >
            <List></List>
          </Grid>
          <Grid
            item
            className="cuarto"
            sx={{ width: 45 / 100, height: 1, border: 1 }}
          >
            <List></List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
