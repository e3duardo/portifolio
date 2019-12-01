import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ContactList({ children }) {
  return <Container>{children}</Container>;
}

ContactList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContactList;
