import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100vw", height: "100vh" }}
      className="App"
      columns={12}
    >
      <Grid item md={3} >
        Lista
      </Grid>
      <Grid item container md={9}  >
        <Grid item md={2} direction="column">
          <Grid item className="div-vertical" sx={{ width: 1, height: 48 / 100 }}>URGENTE</Grid>
          <Grid item className="div-vertical" sx={{ width: 1, height: 48 / 100 }}>NO URGENTE</Grid>
        </Grid>
        <Grid item md={5} direction="column">
          <Grid item>IMPORTANTE</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }}  >primer cuadrante</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }} >tercer cuadrante</Grid>
        </Grid>
        <Grid item md={5} direction="column">
          <Grid item>NO IMPORTANTE</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }}>segundo cuadrante</Grid>
          <Grid item sx={{ width: 1, height: 48 / 100 }}>cuarto cuadrante</Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default App;
