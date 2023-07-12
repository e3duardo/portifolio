import { ReactNode } from "react";

import { Span } from "./styles";

interface TagProps {
  children: ReactNode;
  tag: string;
  close?: string;
}

function Tag({ children, tag, close = "" }: TagProps) {
  return (
    <>
      <Span>{!close ? `<${tag}>` : tag}</Span>
      {children}
      <Span>{!close ? `</${tag}>` : close}</Span>
    </>
  );
}

export default Tag;
