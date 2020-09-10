import React, { useEffect } from 'react';

import Modal from './Modal';

import {
  collapse,
  show,
  updateSkipLink,
} from '../common/api';
import {
  fb,
  ibm,
  infy,
} from '../data/WorkDetails';

import '../App.css';
import '../styles/Work.css';

import apiGatewayLogo from '../images/APIGateway.png';
import apiGatewayLogoJp2 from '../images/APIGateway.jp2';
import apiGatewayLogoWebp from '../images/APIGateway.webp';
import apiGatewayLogoXL from '../images/APIGatewayXL.png';
import apiGatewayLogoXLJp2 from '../images/APIGatewayXL.jp2';
import apiGatewayLogoXLWebp from '../images/APIGatewayXL.webp';
import fbLogo from '../images/Facebook.png';
import ibmLogo from '../images/IBM.png';
import infosysLogo from '../images/Infosys.jpeg';
import sugarIqLogo from '../images/sugariq.png';
import sugarIqLogoJp2 from '../images/sugariq.jp2';
import sugarIqLogoWebp from '../images/sugariq.webp';
import sugarIqLogoXL from '../images/sugariqXL.png';
import sugarIqLogoXLJp2 from '../images/sugariqXL.jp2';
import sugarIqLogoXLWebp from '../images/sugariqXL.webp';

const logo = {
  apiGateway: {
    maxJp2: apiGatewayLogoXLJp2,
    maxReg: apiGatewayLogoXL,
    maxWebp: apiGatewayLogoXLWebp,
    minJp2:  apiGatewayLogoJp2,
    minReg: apiGatewayLogo,
    minWebp: apiGatewayLogoWebp,
  },
  sugarIq: {
    maxJp2: sugarIqLogoXLJp2,
    maxReg: sugarIqLogoXL,
    maxWebp: sugarIqLogoXLWebp,
    minJp2: sugarIqLogoJp2,
    minReg: sugarIqLogo,
    minWebp: sugarIqLogoWebp,
  },
};

const Work = () => {
  useEffect(() => {
    // id of the main content
    updateSkipLink('#work');
  }, []);

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
        <div
          className='teamDetails'
          style={props.img ? {} : { gridTemplateColumns: '1fr' }}
        >
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
            <button
              className='moreDetails'
              onClick={() => show(`${props.id}Details`)}
            >
              More details...
            </button>
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
            <picture onClick={() => show(props.id)}>
              <source
                srcSet={props.logo.minJp2}
                type='image/jp2'
              />
              <source
                srcSet={props.logo.minWebp}
                type='image/webp'
              />
              <source
                srcSet={props.logo.minReg}
                type='image/png'
              />
              <img
                alt={props.alt}
                src={props.logo.minReg}
              />
            </picture>
          }
          {
            props.img &&
            <div
              className='imgModal'
              id={props.id}
              onClick={() => collapse(props.id)}
            >
              <picture onClick={() => collapse(props.id)}>
                <source
                  srcSet={props.logo.maxJp2}
                  type='image/jp2'
                />
                <source
                  srcSet={props.logo.maxWebp}
                  type='image/webp'
                />
                <source
                  srcSet={props.logo.maxReg}
                  type='image/png'
                />
                <img
                  alt={props.alt}
                  className='imgModalContent'
                  src={props.logo.maxReg}
                />
              </picture>
            </div>
          }
        </div>
      </section>
    );
  };

  return (
    <main
      className='bodyWrapper'
      id='work'
    >
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
            logo={logo.apiGateway}
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
            logo={logo.sugarIq}
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
    </main>
  );
};

export default Work;
