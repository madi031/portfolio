import React from 'react';

import {
  MdClose,
} from 'react-icons/md';
import {
  TiWarning,
} from 'react-icons/ti';

import {
  collapse,
} from '../common/api';

import '../styles/Notification.css';

const Notification = props => {
  return (
    <div
      className='notificationContainer'
      id={props.id}
    >
      <div className='notificationMessage'>
        {
          props.failure &&
          <TiWarning />
        }
        <p>
          {props.notificationText}
        </p>
      </div>
      <div className='notificationClose'>
        <MdClose
          onClick={() => {
            document.getElementById(props.id).style.animationName = 'slideOut';
            collapse(props.id);
          }}
        />
      </div>
    </div>
  );
}

export default Notification;
