import React from 'react';

import Modal from './Modal';

import {
  collapse,
  show,
} from '../common/api';
import {
  fb,
  ibm,
  infy,
} from '../data/WorkDetails';

import '../App.css';
import '../styles/Work.css';

import apiGatewayLogo from '../images/APIGateway.png';
import fbLogo from '../images/Facebook.png';
import ibmLogo from '../images/IBM.png';
import infosysLogo from '../images/Infosys.jpeg';
import sugarIqLogo from '../images/sugariq.jpeg';

const Work = () => {
  const CompanyTitle = props => {
    return (
      <div className='companyTitleContainer'>
        <div>
          <img
            alt={props.alt}
            src={props.logo}
          />
        </div>
        <div>
          <p className='company'>
            {props.company}
          </p>
          <p className='title'>
            {props.title}
          </p>
        </div>
      </div>
    );
  };

  const Team = props => {
    return (
      <section className='teamContainer'>
        <h3>
          {props.title}
        </h3>
        <div className='teamDetails'>
          <div>
            <ul
              onClick={() => show(`${props.id}Details`)}
            >
              {
                props.work.map((item, index) => {
                  return (
                    <li
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })
              }
            </ul>
            <p
              className='moreDetails'
              onClick={() => show(`${props.id}Details`)}
            >
              More details...
            </p>
            <Modal
              details={props.details}
              id={`${props.id}Details`}
              title={props.title}
              detailsUrl={props.url}
              tech={props.tech}
            />
          </div>
          {
            props.img &&
            <img
              alt={props.alt}
              src={props.logo}
              onClick={() => show(props.id)}
            />
          }
          {
            props.img &&
            <div
              className='imgModal'
              id={props.id}
              onClick={() => collapse(props.id)}
            >
              <img
                alt={props.alt}
                className='imgModalContent'
                src={props.logo}
                onClick={() => collapse(props.id)}
              />
            </div>
          }
        </div>
      </section>
    );
  };

  return (
    <section className='bodyWrapper'>
      <div className='workContainer'>
        <section className='ibmContainer'>
          <CompanyTitle
            alt={ibm.alt}
            company={ibm.company}
            logo={ibmLogo}
            title={ibm.title}
          />
          <Team
            alt={ibm.apiGateway.title}
            details={ibm.apiGateway.details}
            id='apiGateway'
            img
            logo={apiGatewayLogo}
            title={ibm.apiGateway.title}
            url={ibm.apiGateway.url}
            tech={ibm.apiGateway.tech}
            work={ibm.apiGateway.work}
          />
          <Team
            alt={ibm.sugarIq.title}
            details={ibm.sugarIq.details}
            id='sugarIq'
            img
            logo={sugarIqLogo}
            title={ibm.sugarIq.title}
            url={ibm.sugarIq.url}
            tech={ibm.sugarIq.tech}
            work={ibm.sugarIq.work}
          />
          <Team
            details={ibm.cxlPortal.details}
            id='cxlPortal'
            title={ibm.cxlPortal.title}
            tech={ibm.cxlPortal.tech}
            work={ibm.cxlPortal.work}
          />
        </section>
        <hr />
        <section className='fbContainer'>
          <CompanyTitle
            alt={fb.alt}
            company={fb.company}
            logo={fbLogo}
            title={fb.title}
          />
          <Team
            details={fb.fbLite.details}
            id='fbLite'
            title={fb.fbLite.title}
            tech={fb.fbLite.tech}
            work={fb.fbLite.work}
          />
        </section>
        <hr />
        <section className='infyContainer'>
          <CompanyTitle
            alt={infy.alt}
            company={infy.company}
            logo={infosysLogo}
            title={infy.title}
          />
          <Team
            details={infy.ezforms.details}
            id='infosys'
            title={infy.ezforms.title}
            tech={infy.ezforms.tech}
            work={infy.ezforms.work}
          />
        </section>
      </div>
    </section>
  );
};

export default Work;
