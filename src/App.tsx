import React from "react";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
