import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  updateSkipLink,
} from '../common/api';

import '../styles/About.css';
import '../App.css';

import profilePhoto from '../images/profile_photo.jpg';
import profilePhotoJp2 from '../images/profile_photo.jp2';
import profilePhotoWebp from '../images/profile_photo.webp';

const About = () => {
  useEffect(() => {
    // id of the main content
    updateSkipLink('#about');
  }, []);

  return (
    <main
      className='bodyWrapper'
      id='about'
    >
      <section className='aboutHeader'>
        <div className='imageContainer'>
          <picture>
            <source
              srcSet={profilePhotoJp2}
              type='image/jp2'
            />
            <source
              srcSet={profilePhotoWebp}
              type='image/webp'
            />
            <source
              srcSet={profilePhoto}
              type='image/jpg'
            />
            <img
              alt='mathioli'
              src={profilePhoto}
            />
          </picture>
        </div>
        <div className='nameContainer'>
          <p>Software Developer</p>
          <p>Live in Raleigh, NC, USA</p>
          <p>Fluent in English and Tamil</p>
        </div>
      </section>
      <hr />
      <section className='aboutBody'>
        <p>
          {
            `I'm a web and mobile developer with good knowledge 
            of front-end technologies. I love spending time on 
            fixing little details and optimizing apps. I stand 
            for quality and love to create apps for web and 
            mobile devices.`
          }
        </p>
        <p>
          {
            `I have vast experience in web technologies such 
            as React (with Redux and Webpack) and I use 
            Node.js as backend and SQL database. I have used 
            No SQL databases as well.`
          }
        </p>
        <p>
          {
            `I have good expereince building mobile apps using 
            Swift and React Native. I am not afraid to try out 
            new technologies.`
          }
        </p>
        <p>
          {
            `Find out more about me in `
          }
          <Link to='/work'>/work</Link>
          {
             ` and `
          }
          <Link to='/projects'>/projects</Link>
          {
            `. Sometimes I write some stuff that you can find in `
          }
          <a
            href='https://medium.com/@madi031'
            rel='noopener noreferrer'
            target='_blank'
          >
            {`/blog`}
          </a>
          {
            `. If you want to chat with me and develop some app
            or hire me: `
          }
          <Link to='/contact'>/contact</Link>
          {
            `.`
          }
        </p>
      </section>
    </main>
  );
};

export default About;
