import * as React from "react";
import { useTranslation } from "react-i18next";

import { Container, Text, ImageList, Image } from "./styles";

import assets from "assets";

type Languages = "br" | "en";

interface LanguageProps {
  children: string;
  star: 1 | 2 | 3 | 4 | 5;
  language: Languages;
}

function Language({ children, star, language }: LanguageProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: Languages) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container onClick={() => changeLanguage(language)}>
      <Text>{children}</Text>
      <ImageList>
        {[1, 2, 3, 4, 5].map((n) => (
          <Image
            key={n}
            src={n < star ? assets.solid.star : assets.outline.star}
            alt=""
          />
        ))}
      </ImageList>
    </Container>
  );
}

Language.defaultProps = {};

export default Language;
