import React, { useEffect } from 'react';

import Modal from './Modal';

import {
  show,
  updateSkipLink,
} from '../common/api';
import { projects } from '../data/Projects';

import '../styles/Projects.css';
import '../styles/Work.css';

const Projects = () => {
  useEffect(() => {
    // id of the main content
    updateSkipLink('#projects');
  }, []);

  const ProjectDetails = props => {
    return (
      <section className='projectDetails'>
        <p className='title'>
          {props.title}
        </p>
        <p
          className='details'
          onClick={() => show(props.id)}
        >
          {props.details}
        </p>
        <button
          className='moreDetails'
          onClick={() => show(props.id)}
        >
          More details...
        </button>
        <Modal
          details={props.about}
          id={props.id}
          liveCode={props.liveCode}
          serverUrl={props.serverUrl}
          tech={props.tech}
          title={props.title}
          url={props.url}
        />
      </section>
    );
  };

  return (
    <main
      className='bodyWrapper'
      id='projects'
    >
      <div className='projectContainer'>
        <section className='project'>
          <p>
            {`Here's a selection of some of my recent work. For more up to date work you can visit me on `}
            <a
              className='githubUrl'
              href='https://github.com/madi031?tab=repositories'
              rel='noopener noreferrer'
              target='_blank'
            >
              GitHub (madi031)
            </a>
            {`.`}
          </p>
          {
            projects.map(project => (
              <ProjectDetails
                about={project.about}
                details={project.details}
                id={project.id}
                liveCode={project.liveCode}
                serverUrl={project.serverUrl}
                tech={project.tech}
                title={project.title}
                url={project.url}
              />
            ))
          }
        </section>
      </div>
    </main>
  );
};

export default Projects;
