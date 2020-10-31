import React from "react";

import { Container } from "./styles";

interface HobbieListProps {
  children: React.ReactNode;
}

function HobbieList({ children }: HobbieListProps) {
  return <Container>{children}</Container>;
}

export default HobbieList;
