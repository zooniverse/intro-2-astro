import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';

import './index.css';
import BasicApp from './app';
import Home from './home';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route name='app' path='/' component={BasicApp}>
          <IndexRedirect to='home'/>
          <Route path='/home' component={Home}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
