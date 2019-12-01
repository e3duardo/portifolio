import React from 'react';

import { Container, Text, ImageList, Image } from './styles';

import starOutline from '~/assets/star-regular.svg';
import starSolid from '~/assets/star-solid.svg';

export default function Language({ children, star }) {
  return (
    <Container>
      <Text>{children}</Text>
      <ImageList>
        {[...Array(5).keys()].map(n => (
          <Image src={n < star ? starSolid : starOutline} alt="" />
        ))}
      </ImageList>
    </Container>
  );
}
