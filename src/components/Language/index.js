import React from 'react';
import PropTypes from 'prop-types';
import AirPropTypes from 'airbnb-prop-types';

import { Container, Text, ImageList, Image } from './styles';

import starOutline from '~/assets/star-regular.svg';
import starSolid from '~/assets/star-solid.svg';

function Language({ children, star }) {
  return (
    <Container>
      <Text>{children}</Text>
      <ImageList>
        {[...Array(5).keys()].map(n => (
          <Image key={n} src={n < star ? starSolid : starOutline} alt="" />
        ))}
      </ImageList>
    </Container>
  );
}

Language.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  star: AirPropTypes.range(1, 6).isRequired,
};

export default Language;
