import { ReactNode } from "react";

import { Container } from "./styles";

interface HobbyListProps {
  children: ReactNode;
}

function HobbyList({ children }: HobbyListProps) {
  return <Container>{children}</Container>;
}

export default HobbyList;
