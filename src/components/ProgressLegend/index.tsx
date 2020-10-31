import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Left, Right } from "./styles";

function ProgressLegend() {
  const { t } = useTranslation();

  return (
    <Container>
      <Left>{t("Beginner")}</Left>
      <Left>{t("Proficient")}</Left>
      <Right>{t("Expert")}</Right>
      <Right>{t("Master")}</Right>
    </Container>
  );
}

export default ProgressLegend;
