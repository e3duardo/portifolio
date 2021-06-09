import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import { useTranslation } from "react-i18next";

import {
  Container,
  Header,
  ImagePlace,
  Image,
  Highlight,
  NoPrint,
} from "./styles";

import assets from "assets";

interface DefaultLayoutProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

function DefaultLayout({
  children,
  location: { pathname },
}: DefaultLayoutProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <ImagePlace>
          <Image src={assets.picture.eduardo} alt="Eduardo Santos" />
        </ImagePlace>
        <NoPrint>
          <h1>{t("hello, ")}</h1>
        </NoPrint>
        <h2>
          <NoPrint>{t("my name is")} </NoPrint>
          <Highlight>Eduardo Santos</Highlight>
          <NoPrint>
            {t(" and this is my")}{" "}
            {t(pathname === "/portfolio" ? "portfolio" : "resume")}
          </NoPrint>
        </h2>
        <NoPrint>
          <p>
            <NavLink to="/">resume</NavLink> |{" "}
            {/* <NavLink to="/portfolio">portfolio</NavLink> */}
            <NavLink to="/blog">blog</NavLink>
          </p>
        </NoPrint>
      </Header>
      {children}
    </Container>
  );
}

export default withRouter(DefaultLayout);
