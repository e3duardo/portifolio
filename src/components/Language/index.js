import React from 'react';
import PropTypes from 'prop-types';
import AirPropTypes from 'airbnb-prop-types';
import { useTranslation } from "react-i18next";

import { Container, Text, ImageList, Image } from './styles';

import starOutline from '~/assets/star-regular.svg';
import starSolid from '~/assets/star-solid.svg';

function Language({ children, star, language }) {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(language);
  };

  return (
    <Container onClick={e=>changeLanguage()}>
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
  language: PropTypes.oneOf(['br', 'en'])
};

export default Language;
