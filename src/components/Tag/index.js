import React from 'react';
import PropTypes from 'prop-types';

import { Span } from './styles';

function Tag({ children, tag, close }) {
  return (
    <>
      <Span>{!close ? `<${tag}>` : tag}</Span>
      {children}
      <Span>{!close ? `</${tag}>` : close}</Span>
    </>
  );
}

Tag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  tag: PropTypes.string.isRequired,
  close: PropTypes.string,
};

Tag.defaultProps = {
  close: '',
};

export default Tag;
