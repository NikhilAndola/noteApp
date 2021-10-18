// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {About} from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';

function App() {
  return (
      <>
      <NoteState>
    <Router>
        <Navbar title="NoteApp"/>
        <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
        </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
