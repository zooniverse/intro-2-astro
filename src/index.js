import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import oauth from 'panoptes-client/lib/oauth';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';

import { config } from './constants/config'
import Layout from './components/layout';
import Home from './pages/home';
import AssignmentsWrapper from './pages/assignments';
import Resources from './pages/resources';
import Student from './pages/student';
import ClassroomsWrapper from './pages/classrooms';

oauth.init(config.panoptesAppId)
  .then(() => {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home}/>
          <Route path='/assignments' component={AssignmentsWrapper}/>
          <Route path='/resources' component={Resources}/>
          <Route path='/student' component={Student}/>
          <Route path='/classrooms' component={ClassroomsWrapper}/>
          <Redirect from='/*' to='/'/>
        </Route>
      </Router>,
      document.getElementById('root'));
  });
