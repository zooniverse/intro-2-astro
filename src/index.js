import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import './index.css';
import Home from './home';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home}>
          <Route path='/aaa' component={Home}/>
        </Route>
        {/* <Route path='/address' component={Address} /> */}
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
