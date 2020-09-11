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
  () => import(/* webpackChunkName: 'About' */ './components/About')
);
const Contact = lazy(
  () => import(/* webpackChunkName: 'Contact' */ './components/Contact')
);
const Projects = lazy(
  () => import(/* webpackChunkName: 'Projects' */ './components/Projects')
);
const University = lazy(
  () => import(/* webpackChunkName: 'University' */ './components/University')
);
const Work = lazy(
  () => import(/* webpackChunkName: 'Work' */ './components/Work')
);

const suspenseSection = classList => {
  return (
    <div className={classList}>
      <p className='suspenseText'>
        Loading...
      </p>
    </div>
  );
};

function App() {
  // Each route has individual supsense to specify min-height based on each section
  // To avoid content layout shift, calculate the min-height for each section from browser
  // and assign it to corresponding section
  return (
    <div className='appContainer'>
      <Router>
        <Header />
          <Switch>
            <Route path='/contact'>
              <Suspense fallback={suspenseSection('contactWrapper')}>
                <div className='contactWrapper'>
                  <Contact />
                </div>
              </Suspense>
            </Route>
            <Route path='/projects'>
              <Suspense fallback={suspenseSection('projectsWrapper')}>
                <div className='projectsWrapper'>
                  <Projects />
                </div>
              </Suspense>
            </Route>
            <Route path='/university'>
              <Suspense fallback={suspenseSection('universityWrapper')}>
                <div className='universityWrapper'>
                  <University />
                </div>
              </Suspense>
            </Route>
            <Route path='/work'>
              <Suspense fallback={suspenseSection('workWrapper')}>
                <div className='workWrapper'>
                  <Work />
                </div>
              </Suspense>
            </Route>
            <Route path='/'>
              <Suspense fallback={suspenseSection('aboutWrapper')}>
                <div className='aboutWrapper'>
                  <About />
                </div>
              </Suspense>
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
