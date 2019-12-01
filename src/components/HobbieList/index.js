import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function HobbieList({ children }) {
  return <Container>{children}</Container>;
}

HobbieList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HobbieList;
