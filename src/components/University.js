import React, { useEffect } from 'react';
import {
  FaMapMarkedAlt,
} from 'react-icons/fa';

import {
  updateSkipLink,
} from '../common/api';
import {
  au,
  ncsu,
} from '../data/UniversityDetails';

import '../styles/University.css';
import '../styles/Work.css';

import auLogo from '../images/AULogo.png';
import ncsuLogo from '../images/NCSULogo.png';

const University = () => {
  useEffect(() => {
    // id of the main content
    updateSkipLink('#university');
  }, []);

  const UniversityCourse = props => {
    return (
      <section className='universityCourse'>
        <h3>
          Courses
        </h3>
        <p>
          {props.course}
        </p>
      </section>
    );
  };

  const UniversityTitle = props => {
    return (
      <div className='companyTitleContainer'>
        <div>
          <img
            alt={props.alt}
            src={props.logo}
          />
        </div>
        <div>
          <p className='company'>
            {props.university}
          </p>
          <p className='title'>
            {props.degree}
          </p>
          <a
            className='universityLocation'
            href={props.url}
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaMapMarkedAlt />
            <p>
              {props.location}
            </p>
          </a>
        </div>
      </div>
    );
  };

  return (
    <main
      className='bodyWrapper'
      id='university'
    >
      <div className='universityContainer'>
        <section className='ncStateContainer'>
          <UniversityTitle
            alt={ncsu.alt}
            degree={ncsu.degree}
            location={ncsu.location}
            logo={ncsuLogo}
            university={ncsu.name}
            url={ncsu.url}
          />
          <UniversityCourse
            course={ncsu.course}
          />
        </section>
        <section className='auContainer'>
          <UniversityTitle
            alt={au.alt}
            degree={au.degree}
            location={au.location}
            logo={auLogo}
            university={au.name}
            url={au.url}
          />
          <UniversityCourse
            course={au.course}
          />
        </section>
      </div>
    </main>
  );
};

export default University;
