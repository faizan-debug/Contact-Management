import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';


const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment >
            <Navbar title="Contact Management" icon="fas fa-id-card-alt" />
            <div className="container">
              <Routes>
                <Route exact path = '/' Component={Home}/>
                <Route exact path = '/about' Component={About}/>
              </Routes>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
