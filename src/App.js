// import logo from './logo.svg';
import './App.css';
import "./index.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {About} from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import {Alert} from './components/Alert';
import Login from './components/Login';
import {Signup} from "./components/Signup";

function App() {
  return (
      <>
      <NoteState>
    <Router>
        <Navbar title="NoteApp"/>
        <Alert message="This is amazing react course"/>
        <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Signup">
            <Signup/>
          </Route>
        </Switch>
        </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
