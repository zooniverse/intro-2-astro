import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Layout from './components/layout';

import Home from './pages/home';
import Student from './pages/student';
import Educator from './pages/educator';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home}/>
          <Route path='/student' component={Student}/>
          <Route path='/educator' component={Educator}/>
          <Redirect from='/*' to='/'/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
