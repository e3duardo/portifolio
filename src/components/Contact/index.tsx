import { ReactNode } from "react";

import { Container, ImagePlace, Image, Text } from "./styles";

interface ContactProps {
  children: ReactNode;
  icon: string;
  link: string;
}

function Contact({ children, icon, link }: ContactProps) {
  return (
    <Container>
      {icon && (
        <ImagePlace>
          <Image src={icon} alt="" />
        </ImagePlace>
      )}
      <Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Text>
    </Container>
  );
}

export default Contact;
