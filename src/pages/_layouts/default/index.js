import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

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
  return (
    <Container>
      <Header>
        <ImagePlace>
          <Image src={eduardo} alt="Eduardo Santos" />
        </ImagePlace>
        <NoPrint>
          <h1>hello,</h1>
        </NoPrint>
        <h2>
          <NoPrint>my name is </NoPrint>
          <Highlight>Eduardo Santos</Highlight>
          <NoPrint>
            {' '}
            and this is my {pathname === '/portfolio' ? 'portfolio' : 'resume'}
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
