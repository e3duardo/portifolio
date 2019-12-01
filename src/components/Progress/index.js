import React from 'react';
import PropTypes from 'prop-types';
import AirPropTypes from 'airbnb-prop-types';

import { Container, Background, Foreground, Text } from './styles';

function Progress({ children, tick }) {
  return (
    <Container>
      <Text>{children}</Text>
      <Background>
        <Foreground tick={tick} />
      </Background>
    </Container>
  );
}

Progress.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  tick: AirPropTypes.range(1, 100).isRequired,
};

export default Progress;
