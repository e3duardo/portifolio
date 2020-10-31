import React from "react";

import { Span } from "./styles";

interface TagProps {
  children: React.ReactNode;
  tag: string;
  close?: string;
}

function Tag({ children, tag, close }: TagProps) {
  return (
    <>
      <Span>{!close ? `<${tag}>` : tag}</Span>
      {children}
      <Span>{!close ? `</${tag}>` : close}</Span>
    </>
  );
}

Tag.defaultProps = {
  close: "",
};

export default Tag;
