import logo from './logo.svg';
import './App.css';
import './components/calendar/calendar'
import './components/listBox/listBox'
import './components/skill/skill'
import './components/task/task'
import ListBox from './components/listBox/listBox';
import Calendar from './components/calendar/calendar';
import Grid from '@mui/material/Grid';



function App() {
  return (
    <Grid container spacing={2} sx={{ width: '100vw', height: '100vh' }} className="App">
      <Grid item md={3}>
        <ListBox></ListBox>
      </Grid>
      <Grid item md={9}>
        <Grid item sx={{ height: 3 / 4 }}>
          <Calendar></Calendar>
        </Grid>
        <Grid item sx={{ height: 1 / 4 }} >
          <ListBox></ListBox>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default App;
