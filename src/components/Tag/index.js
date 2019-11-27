import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  opacity: 0.25;
`;

export default function Tag({ children, tag, close }) {
  return (
    <>
      <Span>{!close ? `<${tag}>` : tag}</Span>
      {children}
      <Span>{!close ? `</${tag}>` : close}</Span>
    </>
  );
}

// {/* &#123;&#47;&#42;<span>about me</span>&#42;&#47;&#125; */}
