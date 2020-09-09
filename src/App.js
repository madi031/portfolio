import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import University from './components/University';
import Work from './components/Work';

import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <Router>
        <Header />
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/university'>
            <University />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
