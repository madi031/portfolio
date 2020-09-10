import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import ModeDetector from './ModeDetector';

import '../styles/Header.css';

window.onload = function () {
  let speed = 300;
  let nameText = 'Mathioli Ramalingam';
  let index = 0;

  function animateNameText() {
    if (index < nameText.length) {
      if (document.getElementById('nameHolder')) {
        document.getElementById('nameHolder').innerHTML += nameText[index];
        index++;
      }
      setTimeout(animateNameText, speed);
    }
  }

  document.getElementById('skipLinkTag').style.display = 'block';

  animateNameText();
};

const Header = () => {
  const Title = () => {
    return (
      <div className='titleContainer'>
        <Link to='/'>
          <p id='nameHolder'></p>
        </Link>
        <ModeDetector />
      </div>
    );
  };

  return (
    <header className='wrapper'>
      <Title />
      <Menu />
    </header>
  );
};

export default Header;
