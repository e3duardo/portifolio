import React from "react";

import { Container, Company, Description, Title } from "./styles";

interface ExperienceProps {
  children?: React.ReactNode;
  company: string;
  season: string;
  job: string;
}

function Experience({ children, company, season, job }: ExperienceProps) {
  return (
    <Container>
      <Company>
        <Title>{company}</Title>
        <p>{season}</p>
      </Company>
      <Description>
        <Title>{job}</Title>
        <p>{children}</p>
      </Description>
    </Container>
  );
}

export default Experience;
