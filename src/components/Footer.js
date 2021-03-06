import React, { useEffect, useState } from 'react';

import '../styles/Footer.css';

import githubLogo from '../images/GitHub.png';
import githubNightLogo from '../images/GitHubNight.png';
import gmailLogo from '../images/Gmail.svg';
import linkedinLogo from '../images/Linkedin.png';
import twitterLogo from '../images/Twitter.svg';

const NIGHT_MODE = 'IS_NIGHT_MODE_ON';

const Footer = () => {
  const [isNightMode, setNightMode] = useState(false);

  const updateNightMode = evt => {
    setNightMode(evt.detail.isNightMode);
  };

  useEffect(() => {
    // Local storage stores value as string. JSON.parse converts it into boolean
    let isNightModeOn = JSON.parse(localStorage.getItem(NIGHT_MODE));

    if (isNightModeOn !== undefined && isNightModeOn !== null) {
      setNightMode(isNightModeOn);
    } else {
      let d = new Date();
      let hr = d.getHours();

      // set night mode on by default, if user preference is not present and time is night
      if (hr <= 8 || hr >= 18) {
        setNightMode(true);
      }
    }

    window.addEventListener('NIGHT_MODE_CHANGE', updateNightMode);

    return () => {
      window.removeEventListener('NIGHT_MODE_CHANGE', updateNightMode);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
