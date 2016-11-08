import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import oauth from 'panoptes-client/lib/oauth';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/app.css';

import { config } from './constants/config'
import Layout from './components/layout';
import Home from './pages/home';
import Assignments from './pages/assignments';
import Resources from './pages/resources';
import Student from './pages/student';
import Educator from './pages/educator';

oauth.init(config.panoptesAppId)
  .then(() => {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home}/>
          <Route path='/assignments' component={Assignments}/>
          <Route path='/resources' component={Resources}/>
          <Route path='/student' component={Student}/>
          <Route path='/educator' component={Educator}/>
          <Redirect from='/*' to='/'/>
        </Route>
      </Router>,
      document.getElementById('root'));
  });
