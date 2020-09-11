import React, { useEffect, useState } from 'react';

import '../styles/Footer.css';

import githubLogo from '../images/GitHub.png';
import githubNightLogo from '../images/GitHubNight.png';
import gmailLogo from '../images/Gmail.svg';
import linkedinLogo from '../images/Linkedin.png';
import twitterLogo from '../images/Twitter.svg';

const Footer = () => {
  const [isNightMode, setNightMode] = useState(false);

  const updateNightMode = evt => {
    setNightMode(evt.detail.isNightMode);
  };

  useEffect(() => {
    window.addEventListener('NIGHT_MODE_CHANGE', updateNightMode);

    return () => {
      window.removeEventListener('NIGHT_MODE_CHANGE', updateNightMode);
    }
  }, []);

  return (
    <footer className='footerWrapper'>
      <section className='footerIconWraper'>
        <a
          href='https://www.linkedin.com/in/mathioli-ramalingam-1b265034/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
           alt='linkedin'
           src={linkedinLogo}
          />
        </a>
        <a
          href='https://github.com/madi031'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
           alt='github'
           src={isNightMode ? githubNightLogo : githubLogo}
          />
        </a>
        <a
          href='https://twitter.com/Mathioli'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
           alt='twitter'
           src={twitterLogo}
          />
        </a>
        <a
          href='mailto:mail@mathioli.dev'
        >
          <img
           alt='gmail'
           src={gmailLogo}
          />
        </a>
      </section>
      <section className='footerText'>
        <p>
          If you have a project that you want to get started, think you need my help with something or just fancy saying hi, then get in touch.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
