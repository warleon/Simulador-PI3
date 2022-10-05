import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Task from "./components/task/task";
import List from "./components/list/list";
import { v4 as uuid } from 'uuid';

function App() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100vw", height: "100vh" }}
      className="App"
      columns={12}
    >
      <Grid item md={3} sx={{ width: 1, height: 1, maxHeight: 1, overflow: 'auto' }}>
        <List>
          {[...Array(7).keys()].map((_, i) => Task({
            key: uuid(),
            id: i,
            name: "tarea" + i,
            date: Date()
          }))}
        </List>
      </Grid>
      <Grid item container md={9}  >
        <Grid item md={1 / 2} direction="column">
          <Grid item className="div-vertical" sx={{ width: 1, height: 48 / 100 }}>URGENTE</Grid>
          <Grid item className="div-vertical" sx={{ width: 1, height: 48 / 100 }}>NO URGENTE</Grid>
        </Grid>
        <Grid item md={5 + 3 / 4} direction="column">
          <Grid item>IMPORTANTE</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }}  >primer cuadrante</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }} >tercer cuadrante</Grid>
        </Grid>
        <Grid item md={5 + 3 / 4} direction="column">
          <Grid item>NO IMPORTANTE</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }}>segundo cuadrante</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }}>cuarto cuadrante</Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default App;
