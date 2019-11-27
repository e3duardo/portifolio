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
          {/* <h3>
            &#123;&#47;&#42;<span>education</span>&#42;&#47;&#125;
          </h3>
          <h3>
            &#123;&#47;&#42;<span>experiences</span>&#42;&#47;&#125;
          </h3> */}
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
          <Progress tick={70}>Java</Progress>
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
