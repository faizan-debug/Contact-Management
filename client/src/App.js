import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/pages/Home';
import About from './components/pages/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom/client'


const App = () => {
  return (
    <Router>
    <Fragment className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path = '/' Component={Home}/>
          <Route exact path = '/about' Component={About}/>
        </Routes>
      </div>
    </Fragment>
    </Router>
  );
}

export default App;
