import React from "react";
import { Switch, Route } from "react-router-dom";

import Resume from "pages/Resume";
import Portfolio from "pages/Portfolio";
import Blog from "pages/Blog";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Resume} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/blog" exact component={Blog} />
    </Switch>
  );
}
