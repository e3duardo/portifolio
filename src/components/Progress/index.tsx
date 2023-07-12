import { ReactNode } from "react";

import { Container, Background, Foreground, Text } from "./styles";

interface ProgressProps {
  children: ReactNode;
  tick: number; // 1 - 100
}

function Progress({ children, tick }: ProgressProps) {
  return (
    <Container>
      <Text>{children}</Text>
      <Background>
        <Foreground tick={tick} />
      </Background>
    </Container>
  );
}

export default Progress;
