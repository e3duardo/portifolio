import React from "react";
import { HashRouter } from "react-router-dom";
import ReactGA from "react-ga";

import Routes from "routes";
import DefaultLayout from "pages/_layouts/default";

import GlobalStyle from "styles/global";

if (process.env.NODE_ENV !== "development") {
  ReactGA.initialize("UA-153539086-1", {
    debug: true,
  });
}

function App() {
  return (
    <HashRouter basename="/">
      <GlobalStyle />
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </HashRouter>
  );
}

export default App;
