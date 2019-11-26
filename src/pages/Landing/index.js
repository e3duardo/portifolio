import React from 'react';
import {
  Container,
  Header,
  ImagePlace,
  Image,
  Row,
  Main,
  Aside,
} from './styles';

export default function Landing() {
  return (
    <Container>
      <Header>
        <ImagePlace>
          <Image />
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
            &#123;&#47;&#42;<span>about me</span>&#42;&#47;&#125;
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus, non, dolorem, cumque distinctio magni quam expedita
            velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores
            voluptatem dolorum! Quasi.
          </p>
          <h3>
            &#123;&#47;&#42;<span>education</span>&#42;&#47;&#125;
          </h3>
          <h3>
            &#123;&#47;&#42;<span>experiences</span>&#42;&#47;&#125;
          </h3>
        </Main>
        <Aside>
          <h3>
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
          </h3>
        </Aside>
      </Row>
    </Container>
  );
}
