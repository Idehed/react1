import css from './App.module.css';
import Content from './components/Content';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import NestingComponents from './components/NestingComponents';
import StatefulGreetingWithPrevState from './components/SatefulGreetingWithPrevState';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className={css.App}> 
     <LifeCyclesCDU/>
    </div>
  );
}

export default App;