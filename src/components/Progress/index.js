import React from 'react';

import { Container, Background, Foreground, Text } from './styles';

export default function Progress({ children, tick }) {
  return (
    <Container>
      <Text>{children}</Text>
      <Background>
        <Foreground tick={tick} />
      </Background>
    </Container>
  );
}
