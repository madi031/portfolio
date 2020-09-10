import React, {
  lazy,
  Suspense,
} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

const About = lazy(() => import(/* webpackChunkName: 'About' */ './components/About'));
const Contact = lazy(() => import(/* webpackChunkName: 'Contact' */ './components/Contact'));
const Projects = lazy(() => import(/* webpackChunkName: 'Projects' */ './components/Projects'));
const University = lazy(() => import(/* webpackChunkName: 'University' */ './components/University'));
const Work = lazy(() => import(/* webpackChunkName: 'Work' */ './components/Work'));

function App() {
  return (
    <div className='appContainer'>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
