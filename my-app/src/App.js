import css from './App.module.css';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreetingWithPrevState from './components/SatefulGreetingWithPrevState';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App"> 
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;