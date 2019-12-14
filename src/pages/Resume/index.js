import React from 'react';
import ReactGA from 'react-ga';

import { Row, Main, Aside } from './styles';

import About from './about';
// import Education from './education';
import Experiences from './experiences';
import Contacts from './contacts';
import Skills from './skills';
import Languages from './languages';
import Hobbies from './hobbies';

function Resume() {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA.pageview('/');
  }

  return (
    <Row>
      <Main>
        <About />
        <Experiences />
        {/* <Education /> */}
      </Main>
      <Aside>
        <Skills />
        <Languages />
        <Hobbies />
        <Contacts />
      </Aside>
    </Row>
  );
}

export default Resume;
