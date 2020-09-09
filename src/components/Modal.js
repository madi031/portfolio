import React from 'react';
import {
  CgDetailsMore,
  CgWebsite,
} from 'react-icons/cg';
import {
  HiCode,
} from 'react-icons/hi';
import {
  MdClose,
} from 'react-icons/md';

import {
  collapse,
} from '../common/api';

import '../styles/Work.css';

const Modal = props => {
  return (
    <div
      className='detailsModal'
      id={props.id}
      onClick={() => collapse(props.id)}
    >
      <div
        className='detailsContent'
        onClick={e => e.stopPropagation()}
      >
        <div className='closeIconWrapper'>
          <MdClose
            className='closeIcon'
            onClick={() => collapse(props.id)}
          />
        </div>
        <h3>
          {props.title}
        </h3>
        <h5>
          {props.tech}
        </h5>
        <p>
          {props.details}
        </p>
        <div style={{display: 'flex'}}>
          {
            props.detailsUrl &&
            <a
              href={props.detailsUrl}
              rel='noopener noreferrer'
              target='_blank'
            >
              <CgDetailsMore />
              Details
            </a>
          }
          {
            props.url &&
            <a
              href={props.url}
              rel='noopener noreferrer'
              target='_blank'
            >
              <HiCode />
              source code
            </a>
          }
          {
            props.liveCode &&
            <a
              href={props.liveCode}
              rel='noopener noreferrer'
              style={{ marginLeft: '20px' }}
              target='_blank'
            >
              <CgWebsite />
              live site
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;
