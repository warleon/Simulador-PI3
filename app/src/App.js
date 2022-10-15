import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Task from "./components/task/task";
import List from "./components/list/list";
import { v4 as uuid } from 'uuid';
import { border, margin } from "@mui/system";

function App() {
  return (
   <Grid
      container
      spacing={2}
      sx={{ width: "100vw", height: "100vh" }}
      className="App"
      columns={12}
    >
      <Grid item className ="cursos" md={2.9} sx={{ width: 1, height: 1, maxHeight: 1, overflow: 'auto', border: 1 }}>
        <List>
          {[...Array(7).keys()].map((_, i) => Task({
            key: uuid(),
            name: "Curso " + i,
            date: Date()
          }))}
        </List>
      </Grid>
      <Grid item container md={9}>
        <Grid item md={1 / 2} direction="column">
          <Grid item className="div-vertical" sx={{ width: 1, height: 50 / 100, border: 1 }}>URGENTE</Grid>
          <Grid item className="div-vertical" sx={{ width: 1, height: 50 / 100, border: 1 }}>NO URGENTE</Grid>
        </Grid>
        <Grid item md={5 + 3 / 4} direction="column">
          <Grid item className="div-horizontal" sx={{ width: 1, height: 50, border: 1 }}>IMPORTANTE</Grid>
          <Grid item className= "primero" my={1} sx={{ width: 1, height: 48 / 100, border: 1 }}>Primer Cuadrante</Grid>
          <Grid item className= "tercero" my={1} sx={{ width: 1, height: 48 / 100, border: 1 }}>Tercer Cuadrante</Grid>
        </Grid>
        <Grid item md={5 + 3 / 4} direction="column">
          <Grid item className="div-horizontal" sx={{ width: 1, height: 50 , border: 1}}>NO IMPORTANTE</Grid>
          <Grid item className= "segundo" my={1} sx={{ width: 1, height: 48 / 100, border: 1 }}>Segundo Cuadrante</Grid>
          <Grid item className= "cuarto" my={1} sx={{ width: 1, height: 48 / 100, border: 1 }}>Cuarto Cuadrante</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
