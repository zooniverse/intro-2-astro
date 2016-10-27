import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li>Intro</li>
          <li>Follow Up</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
