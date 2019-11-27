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
            <Tag tag="h3">about me</Tag>
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

          <br />
          <br />
          <br />
          <br />
          <footer>
            <Tag tag="footer">
              please contact me at{' '}
              <a href="mail:e3duardo@gmail.com">e3duardo[a]gmail.com</a>
            </Tag>
          </footer>
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
          </h3>
          <h3>
            &#123;&#47;&#42;<span>skills</span>&#42;&#47;&#125;
          </h3>
          <h3>
            &#123;&#47;&#42;<span>languages</span>&#42;&#47;&#125;
          </h3>
          <h3>
            &#123;&#47;&#42;<span>hobies</span>&#42;&#47;&#125;
          </h3> */}
        </Aside>
      </Row>
    </Container>
  );
}
