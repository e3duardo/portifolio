import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Hobbie({ children, icon }) {
  return (
    <Container>
      {icon && <img src={icon} alt="I like" />}
      {children}
    </Container>
  );
}

Hobbie.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string.isRequired,
};

export default Hobbie;
