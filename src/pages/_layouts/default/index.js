import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import { Container, Header, ImagePlace, Image } from './styles';

import eduardo from '~/assets/eduardo.png';

function DefaultLayout({ children, location: { pathname } }) {
  return (
    <Container>
      <Header>
        <ImagePlace>
          <Image src={eduardo} />
        </ImagePlace>
        <h1>hello,</h1>
        <h2>
          my name is <span>Eduardo Santos</span> and this is my{' '}
          {pathname === '/portifolio' ? 'portifolio' : 'resume'}
        </h2>
        <p>
          <NavLink to="/">resume</NavLink> |{' '}
          <NavLink to="/portifolio">portifolio</NavLink>
        </p>
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
};

export default withRouter(DefaultLayout);
