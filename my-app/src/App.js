import css from './App.module.css';
import Content from './components/Content';
import ControlledForm from './components/ControlledForm';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import NestingComponents from './components/NestingComponents';
import StatefulGreetingWithPrevState from './components/SatefulGreetingWithPrevState';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import UnControlledForm from './components/UnControlledForm';

function App() {
  return (
    <div className={css.App}> 
     <SearchBar />
    </div>
  );
}

export default App;