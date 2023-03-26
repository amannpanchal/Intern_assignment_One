import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {useState} from 'react';
import axios from 'axios';
function App() {
  return (
    <div className  = "App">
<Router>
  <Routes>
    <Route path = "/" element = {<Login/>}></Route>
    <Route path = "/signup" element = {<Signup/>}></Route>
    <Route path = "/home" element = {<Home/>}></Route>


  </Routes>



</Router>

    </div>
  );
}

export default App;
