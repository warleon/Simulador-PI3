import logo from './logo.svg';
import './App.css';
import './components/calendar/calendar'
import './components/listBox/listBox'
import './components/skill/skill'
import './components/task/task'
import ListBox from './components/listBox/listBox';
import Calendar from './components/calendar/calendar';

function App() {
  return (
    <div className="App">
      <ListBox></ListBox>
      <ListBox></ListBox>
      <Calendar></Calendar>
      <ListBox></ListBox>
    </div>
  );
}

export default App;
