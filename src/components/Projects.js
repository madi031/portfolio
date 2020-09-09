import React from 'react';

import Modal from './Modal';

import {
  show,
} from '../common/api';
import {
  effortEstimation,
  engineEar,
  expenseTracker,
  imageAnalyzer,
  markdownPg,
  weatherApp,
} from '../data/Projects';

import '../styles/Projects.css';
import '../styles/Work.css';

const Projects = () => {
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
        <p
          className='moreDetails'
          onClick={() => show(props.id)}
        >
          More details...
        </p>
        <Modal
          details={props.about}
          id={props.id}
          liveCode={props.liveCode}
          tech={props.tech}
          title={props.title}
          url={props.url}
        />
      </section>
    );
  };

  return (
    <section className='bodyWrapper'>
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
          <ProjectDetails
            about={engineEar.details}
            details={engineEar.details}
            id='engineEar'
            tech={engineEar.tech}
            title={engineEar.title}
          />
          <ProjectDetails
            about={imageAnalyzer.details}
            details={imageAnalyzer.details}
            id='imageAnalyzer'
            tech={imageAnalyzer.tech}
            title={imageAnalyzer.title}
            url={imageAnalyzer.url}
          />
          <ProjectDetails
            about={expenseTracker.about}
            details={expenseTracker.details}
            id='expenseTracker'
            tech={expenseTracker.tech}
            title={expenseTracker.title}
            url={expenseTracker.url}
          />
          <ProjectDetails
            about={markdownPg.details}
            details={markdownPg.details}
            id='markdownPg'
            liveCode={markdownPg.liveCode}
            tech={markdownPg.tech}
            title={markdownPg.title}
            url={markdownPg.url}
          />
          <ProjectDetails
            about={weatherApp.about}
            details={weatherApp.details}
            id='weatherApp'
            tech={weatherApp.tech}
            title={weatherApp.title}
            url={weatherApp.url}
          />
          <ProjectDetails
            about={effortEstimation.details}
            details={effortEstimation.details}
            id='effortEstimation'
            tech={effortEstimation.tech}
            title={effortEstimation.title}
            url={effortEstimation.url}
          />
        </section>
      </div>
    </section>
  );
};

export default Projects;
