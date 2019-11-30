import React from 'react';
import ReactGA from 'react-ga';
import {
  Container,
  Header,
  ImagePlace,
  Image,
  Row,
  Main,
  Aside,
} from './styles';

import Tag from '~/components/Tag';
import Progress from '~/components/Progress';
import ProgressLegend from '~/components/ProgressLegend';
import Experience from '~/components/Experience';
import eduardo from '~/assets/eduardo.png';

export default function Landing() {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA.pageview('/');
  }

  return (
    <Container>
      <Header>
        <ImagePlace>
          <Image src={eduardo} />
        </ImagePlace>
        <h1>hello,</h1>
        <h2>
          my name is <span>Eduardo Santos</span> and this is my resume
        </h2>
      </Header>

      <Row>
        {/*  */}
        <Main>
          <div>
            <h3>
              <Tag tag="h3">About me</Tag>
            </h3>
            <p>
              <Tag tag="p">
                Graduating in Information Systems, I seek opportunity to share
                learning and learn.
              </Tag>
            </p>
            <p>
              <Tag tag="p">
                As a Systems Analyst, I have 4 years developing Java and web
                technologies.
              </Tag>
            </p>
            <p>
              <Tag tag="p">
                Knowledge in Java and Hibernate. Special attention to React,
                website optimization and passion for the learning process.
              </Tag>
            </p>
          </div>
          {/* <div>
            <h3>
              <Tag tag="h3">Education</Tag>
            </h3>
          </div> */}
          <div>
            <h3>
              <Tag tag="h3">Experiences</Tag>
            </h3>
            <Experience
              company="Centro de Ensino Random"
              season="2019 - today"
              job="Computing instructor"
            >
              I started teaching, to pass some of my knowledge forward. Today I
              am teaching basic computer
            </Experience>
            <Experience
              company="centro universitário redentor"
              season="2015 - today"
              job="Systems Analyst"
            >
              I started here as an IT assistant and in 2016 I migrated to the
              development area. As a systems analyst. I use Java and Java EE
              daily, our projects are developed using VRaptor, JSP, Hibernate,
              MySql and for frontend, we use Bootstrap, JQuery, and various
              plugins. Our main project is the institution&apos;s portal, which
              uses the technologies above, as well as other projects with the
              same stack.
              <br />
              <br />
              In addition to growing a lot as a web developer here, I was able
              to learn about DevOps, data modeling, and mobile application
              development with PhoneGap.
            </Experience>
            <Experience company="own" season="2008 - today" job="Freelancer">
              I started freelancing in 2008 developing websites and systems
              using technologies like PHP and C #. Later I continued with PHP
              (sometimes WordPress) and started using Ruby on Rails and Jekyll
              in some projects. I am currently focused on React development.
              <br />
              <br />
              In this walk, I learned a lot about website creation, website
              optimization, continuous integration and everything needed to
              create on the web easily and quickly.
            </Experience>
          </div>
        </Main>
        <Aside>
          {/* <h3>
            &#123;&#47;&#42;<span>contact</span>&#42;&#47;&#125;
          </h3> */}
          <h3>
            <Tag tag="h3">Skills</Tag>
          </h3>
          <Progress tick={94}>HTML</Progress>
          <Progress tick={90}>CSS</Progress>
          <Progress tick={69}>ES6</Progress>
          <Progress tick={55}>React</Progress>
          <Progress tick={85}>Java</Progress>
          <Progress tick={75}>Hibernate</Progress>
          <Progress tick={5}>Clojure</Progress>
          <ProgressLegend />
          {/*
          <h3>
            &#123;&#47;&#42;<span>languages</span>&#42;&#47;&#125;
          </h3>
          <h3>
            &#123;&#47;&#42;<span>hobies</span>&#42;&#47;&#125;
          </h3> */}
        </Aside>
      </Row>
      <br />
      <br />
      <br />
      <footer>
        <Tag tag="footer">
          please contact me at{' '}
          <a href="mail:e3duardo@gmail.com">e3duardo[a]gmail.com</a>
        </Tag>
      </footer>
    </Container>
  );
}
