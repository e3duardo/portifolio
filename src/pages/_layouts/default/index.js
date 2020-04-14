import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

import { Container, Header, ImagePlace, Image } from './styles';

import eduardo from '~/assets/eduardo.png';

function DefaultLayout({ children, location: { pathname } }) {
  return (
    <Container>
      <Header>
        <ImagePlace>
          <Image src={eduardo} alt="Eduardo Santos" />
        </ImagePlace>
        <h1>hello,</h1>
        <h2>
          my name is <span>Eduardo Santos</span> and this is my{' '}
          {pathname === '/portfolio' ? 'portfolio' : 'resume'}
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
