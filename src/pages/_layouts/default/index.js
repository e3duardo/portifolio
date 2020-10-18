import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import {
  Container,
  Header,
  ImagePlace,
  Image,
  Highlight,
  NoPrint,
} from './styles';

import eduardo from '~/assets/eduardo.png';

function DefaultLayout({ children, location: { pathname } }) {
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <ImagePlace>
          <Image src={eduardo} alt="Eduardo Santos" />
        </ImagePlace>
        <NoPrint>
          <h1>{t("hello, ")}</h1>
        </NoPrint>
        <h2>
          <NoPrint>{t("my name is")} </NoPrint>
          <Highlight>Eduardo Santos</Highlight>
          <NoPrint>
             {t(" and this is my")} {t(pathname === '/portfolio' ? 'portfolio' : 'resume')}
          </NoPrint>
        </h2>
        {/* <p>
          <NavLink to="/">resume</NavLink> |{' '}
          <NavLink to="/portfolio">portfolio</NavLink>
        </p> */}
      </Header>
      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(DefaultLayout);
