import React, {
  useEffect,
  useState,
} from 'react';

const NIGHT_MODE = 'IS_NIGHT_MODE_ON';

const ModeDetector = () => {
  const [isNightMode, setNightMode] = useState(false);

  useEffect(() => {
    // Local storage stores value as string. JSON.parse converts it into boolean
    let isNightModeOn = JSON.parse(localStorage.getItem(NIGHT_MODE));

    if (isNightModeOn !== undefined && isNightModeOn !== null) {
      setNightMode(isNightModeOn);

      if (isNightModeOn) {
        document.getElementsByTagName('body')[0].classList.toggle('night');
      }
    } else {
      let d = new Date();
      let hr = d.getHours();

      // set night mode on by default, if user preference is not present and time is night
      if (hr <= 8 || hr >= 18) {
        setNightMode(true);
        document.getElementsByTagName('body')[0].classList.toggle('night');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendEvent = isNightMode => {
    window.dispatchEvent(
      new CustomEvent('NIGHT_MODE_CHANGE', {
        detail: {
          isNightMode,
        },
      })
    );
  }

  const toggleMode = () => {
    localStorage.setItem(NIGHT_MODE, !isNightMode);
    document.getElementsByTagName('body')[0].classList.toggle('night');

    sendEvent(!isNightMode);
    setNightMode(!isNightMode);
  };

  if (isNightMode) {
    return (
      <span
        aria-label='Night Mode'
        role='img'
        onClick={toggleMode}
      >
        🌜
      </span>
    );
  } else {
    return (
      <span
        aria-label='Day Mode'
        role='img'
        onClick={toggleMode}
      >
        🌞
      </span>
    );
  }
};

export default ModeDetector;
