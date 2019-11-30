import React from 'react';

import { Container, Company, Description, Title } from './styles';

export default function Experience({ company, season, job, children }) {
  return (
    <Container>
      <Company>
        <Title>{company}</Title>
        <p>{season}</p>
      </Company>
      <Description>
        <Title>{job}</Title>
        <p>{children}</p>
      </Description>
    </Container>
  );
}
