import 'focus-visible';
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

const About = lazy(
  () => import(/* webpackChunkName: 'About', webpackPrefetch: true */ './components/About')
);
const Contact = lazy(
  () => import(/* webpackChunkName: 'Contact', webpackPrefetch: true */ './components/Contact')
);
const Projects = lazy(
  () => import(/* webpackChunkName: 'Projects', webpackPrefetch: true */ './components/Projects')
);
const University = lazy(
  () => import(/* webpackChunkName: 'University', webpackPrefetch: true */ './components/University')
);
const Work = lazy(
  () => import(/* webpackChunkName: 'Work', webpackPrefetch: true */ './components/Work')
);

const suspenseSection = classList => {
  // suspense text is displayed if page takes more than 3s to load
  // 3s time interval logic is specified in .suspenseText css
  return (
    <div className={classList}>
      <p className='suspenseText'>
        Loading...
      </p>
    </div>
  );
};

function App() {
  return (
    <div className='appContainer'>
      <Router>
        <Header />
        <Suspense fallback={suspenseSection('suspenseContainer')}>
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
