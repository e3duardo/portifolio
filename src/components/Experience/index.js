import React from 'react';
import PropTypes from 'prop-types';

import { Container, Company, Description, Title } from './styles';

function Experience({ children, company, season, job }) {
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

Experience.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  company: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default Experience;
