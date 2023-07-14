import React, {useState} from "react";
import { BrowserRouter as Router , Route,Routes,Link} from "react-router-dom";
import Compiler from "./components/Compiler";
import HomePage from "./components/HomePage";
import './App.css';
import Navbar from "./components/Navbar";


function App() {
   
  return (

  <Router>
    <Navbar/>
    <Routes>
     <Route exact path='/home' element={<HomePage/>}></Route>
     <Route exact path='/compile' element={<Compiler/>}></Route>
   </Routes>
  </Router>

  );
}

export default App
