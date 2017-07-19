import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import AboutLayout from './about';
import ZooHeader from './ZooHeader';
import Home from './Home';

export default function Main() {
  return (
    <App centered={false}>
      <Box>
        <ZooHeader />
        <section className="content-section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutLayout} />
          </Switch>
        </section>
      </Box>
    </App>
  );
}

