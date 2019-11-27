import React from 'react';

import { Container, Left, Right } from './styles';

export default function ProgressLegend() {
  return (
    <Container>
      <Left>Beginner</Left>
      <Left>Proficient</Left>
      <Right>Expert</Right>
      <Right>Master</Right>
    </Container>
  );
}
