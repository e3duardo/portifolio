import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Resume from '~/pages/Resume';
import Portifolio from '~/pages/Portifolio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Resume} />
      <Route path="/portifolio" exact component={Portifolio} />
    </Switch>
  );
}
