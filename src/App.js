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
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }
  return (
      <>
      <NoteState>
    <Router>
        <Navbar title="NoteApp"/>
        <Alert alert={alert}/>
        <div className="container">
        <Switch>
          <Route exact path="/">
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/Signup">
            <Signup showAlert={showAlert}/>
          </Route>
        </Switch>
        </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
