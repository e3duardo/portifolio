import React from "react";

import { Container } from "./styles";

interface HobbieProps {
  children: React.ReactNode;
  icon: string;
}
// TODO: i18n at I like bellow
function Hobbie({ children, icon }: HobbieProps) {
  return (
    <Container>
      {icon && <img src={icon} alt="I like" />}
      {children}
    </Container>
  );
}

export default Hobbie;
