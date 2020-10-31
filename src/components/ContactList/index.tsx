import React from "react";

import { Container } from "./styles";

interface ContactListProps {
  children: React.ReactNode;
}

function ContactList({ children }: ContactListProps) {
  return <Container>{children}</Container>;
}

export default ContactList;
