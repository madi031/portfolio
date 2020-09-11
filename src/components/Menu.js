import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = {
  about: {
    id: 1,
    name: 'About',
    path: '/',
  },
  contact: {
    id: 2,
    name: 'Contact',
    path: '/contact',
  },
  projects: {
    id: 3,
    name: 'Projects',
    path: '/projects',
  },
  university: {
    id: 4,
    name: 'University',
    path: '/university',
  },
  work: {
    id: 5,
    name: 'Work',
    path: '/work',
  },
};

const Menu = () => {
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState(1);

  const buttonClicked = (id) => {
    Object.values(menuItems).forEach((item) => {
      if (item.id === selectedButton) {
        let node = document.getElementById(item.name);
        node.classList.remove('button-selected');
      }
    });

    setSelectedButton(menuItems[id].id);

    let node = document.getElementById(menuItems[id].name);
    node.classList.add('button-selected');
  };

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];

    if (currentPath) {
      buttonClicked(currentPath);
    } else {
      buttonClicked('about');
    }
  });

  const MenuBar = ({ menu }) => {
    let { name, path } = menuItems[menu];
    return (
      <button
        id={name}
        tabIndex={-1}
      >
        <Link to={path}>{name}</Link>
      </button>
    );
  };

  return (
    <header className='menuBarItems'>
      <MenuBar menu='about' />
      <MenuBar menu='work' />
      <MenuBar menu='university' />
      <MenuBar menu='projects' />
      <MenuBar menu='contact' />
    </header>
  );
};

export default Menu;
