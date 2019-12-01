import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImagePlace, Image, Text } from './styles';

function Contact({ children, icon, link }) {
  return (
    <Container>
      {icon && (
        <ImagePlace>
          <Image src={icon} alt="" />
        </ImagePlace>
      )}
      <Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Text>
    </Container>
  );
}

Contact.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Contact;
