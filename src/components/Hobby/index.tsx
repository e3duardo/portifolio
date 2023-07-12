import { ReactNode } from "react";

import { Container } from "./styles";

interface HobbyProps {
  children: ReactNode;
  icon: string;
}

// TODO: i18n at I like bellow
function Hobby({ children, icon }: HobbyProps) {
  return (
    <Container>
      {icon && <img src={icon} alt="I like" />}
      {children}
    </Container>
  );
}

export default Hobby;
