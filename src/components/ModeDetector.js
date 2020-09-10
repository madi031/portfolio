import React, {
  useEffect,
  useState,
} from 'react';
import {
  RiMoonLine,
  RiSunFill,
} from 'react-icons/ri';

const NIGHT_MODE = 'IS_NIGHT_MODE_ON';

const ModeDetector = () => {
  const [isNightMode, setNightMode] = useState(false);

  useEffect(() => {
    // Local storage stores value as string. JSON.parse converts it into boolean
    let isNightModeOn = JSON.parse(localStorage.getItem(NIGHT_MODE));

    if (isNightModeOn !== undefined && isNightMode !== null) {
      setNightMode(isNightModeOn);

      if (isNightModeOn) {
        document.getElementsByTagName('body')[0].classList.toggle('night');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMode = () => {
    localStorage.setItem(NIGHT_MODE, !isNightMode);
    document.getElementsByTagName('body')[0].classList.toggle('night');

    window.dispatchEvent(
      new CustomEvent('NIGHT_MODE_CHANGE', {
        detail: {
          isNightMode: !isNightMode,
        },
      })
    );
    setNightMode(!isNightMode);
  };

  if (isNightMode) {
    return <RiMoonLine onClick={toggleMode} />;
  } else {
    return <RiSunFill onClick={toggleMode} />;
  }
};

export default ModeDetector;
