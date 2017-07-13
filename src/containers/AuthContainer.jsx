// A smart component that handles state for the LoginButton and LoggedInUser
// components. Stores state in Redux.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    if (!props.initialised) {
      Actions.checkLoginUser();
    }
  }

  login() {
    return Actions.loginToPanoptes();
  }

  logout() {
    Actions.logoutFromPanoptes();
  }

  render() {
    return (this.props.user)
      ? <LogoutButton user={this.props.user} logout={this.logout} />
      : <LoginButton login={this.login} />;
  }
}

AuthContainer.propTypes = {
  user: PropTypes.shape({ login: PropTypes.string }),
  initialised: PropTypes.bool,
};

AuthContainer.defaultProps = {
  user: null,
  initialised: false,
};

const mapStateToProps = (state) => ({
  user: state.login.user,
  initialised: state.login.initialised,
});

export default connect(mapStateToProps)(AuthContainer);  // Connects the Component to the Redux Store
