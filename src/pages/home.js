import React, {Component} from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

class Home extends Component {
  render(){
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <p>put your code here</p>
        <Link to="new">to the new page</Link>
      </div>
    )
  }
}

export default Home;
