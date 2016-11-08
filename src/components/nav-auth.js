import React, { Component } from 'react';
import auth from 'panoptes-client/lib/auth';
import oauth from 'panoptes-client/lib/oauth';

import { config } from '../constants/config';

class NavAuth extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
    this.checkLoginUser = this.checkLoginUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.checkLoginUser();
  }

  checkLoginUser() {
    auth.checkCurrent()
      .then(user => this.setState({user: user}));
  }

  login() {
    oauth.signIn(config.panoptesReturnUrl);
  }

  logout() {
    oauth.signOut()
      .then(user => this.setState({user: user}));
  }

  render() {
    let button
    if (this.state.user) {
      button = (
        <div>
          <span>{this.state.user.display_name}{' '}</span>
          <button type='submit' onClick={this.logout}>Logout</button>
        </div>
      )
    } else {
      button = <button type='submit' onClick={this.login}>Login</button>
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

export default NavAuth;
