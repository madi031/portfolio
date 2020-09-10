import React, {
  useEffect,
  useState,
} from 'react';
import {
  send,
} from 'emailjs-com'

import Notification from './Notification';

import {
  collapse,
  showFlex,
  updateSkipLink,
} from '../common/api';

import '../styles/Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    // id of the main content
    updateSkipLink('#contact');
  }, []);

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleMessage = event => {
    setMessage(event.target.value);
  };

  const handleName = event => {
    setName(event.target.value);
  }

  const handleSubject = event => {
    setSubject(event.target.value);
  };

  const handleSubmit = event => {
    let templateParams = {
      from_email: email,
      from_name: name,
      message,
      subject,
      to_name: 'Mathioli',
    };

    collapse('submitSuccess');
    collapse('submitFailure');
    
    send(
      process.env.REACT_APP_MAIL_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_USER_ID,
    ).then(() => {
      showFlex('submitSuccess');
      // hide notification after 10s
      setTimeout(() => collapse('submitSuccess'), 10000);
      resetForm();
    }).catch(() => {
      showFlex('submitFailure');
      setTimeout(() => collapse('submitFailure'), 10000);
    });

    event.preventDefault();
  };

  const resetForm = () => {
    setEmail('');
    setMessage('');
    setName('');
    setSubject('');
  };

  return (
    <main
      className='bodyWrapper'
      id='contact'
    >
      <form
        className='contactContainer'
        onSubmit={e => handleSubmit(e)}
      >
        <p>
          {`Say hi, let's build something together!! 🤝`}
        </p>
        <div>
          <label htmlFor='fullName'>
            Name
          </label>
          <input
            id='fullName'
            name='fullName'
            placeholder='Enter your full name'
            required
            type='text'
            value={name}
            onChange={e => handleName(e)}
          />
        </div>
        <div>
          <label htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            name='email'
            placeholder='Enter your email address'
            required
            type='email'
            value={email}
            onChange={e => handleEmail(e)}
          />
        </div>
        <div>
          <label htmlFor='subject'>
            Subject
          </label>
          <input
            id='subject'
            name='subject'
            placeholder='Enter subject line'
            required
            type='text'
            value={subject}
            onChange={e => handleSubject(e)}
          />
        </div>
        <div>
          <label htmlFor='message'>
            Message
          </label>
          <textarea
            cols='30'
            name='message'
            placeholder='Enter your message'
            required
            rows='10'
            value={message}
            onChange={e => handleMessage(e)}
          />
        </div>
        <input
          className='contactSubmit'
          type='submit'
          value='Send'
        />
      </form>
      <Notification
        id='submitSuccess'
        notificationText='Message sent.'
      />
      <Notification
        id='submitFailure'
        notificationText='Message send failed. Try again.'
        failure
      />
    </main>
  );
};

export default Contact;
