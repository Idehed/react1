import css from './App.module.css';
import Content from './components/Content';
import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';
import ContentHooks from './components/ContentHooks';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import HTTPHooks from './components/HTTPHooks';
import HTTPPost from './components/HTTPPost';
import HTTPRequests from './components/HTTPRequests';
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
import UseEffectCounter from './components/UseEffectCounter';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';

function App() {
  return (
    <div className={css.App}> 
     <Sidebar/>
     <NavBarForm/>
     <NavBarSimple/>
     <ContentAPIHooks/>
    </div>
  );
}

export default App;