// A smart component that handles state for the LoginButton and LoggedInUser
// components. Stores state in Redux.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import RegisterButton from '../components/RegisterButton';
import RegistrationFormContainer from './RegistrationFormContainer';

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    if (!props.initialised) {
      Actions.checkLoginUser();
    }
  }

  toggleRegistrationForm() {
    Actions.auth.toggleRegistrationForm();
  }

  login() {
    Actions.loginToPanoptes();
  }

  logout() {
    Actions.logoutFromPanoptes();
  }

  render() {
    return (this.props.user)
      ? <LogoutButton user={this.props.user} logout={this.logout} />
      : <div>
          <LoginButton login={this.login} />
          <RegisterButton toggleForm={this.toggleRegistrationForm} />
          {this.props.openRegistrationForm && <RegistrationFormContainer />}
        </div>;
  }
}

AuthContainer.propTypes = {
  user: PropTypes.shape({ login: PropTypes.string }),
  initialised: PropTypes.bool,
  openRegistrationForm: PropTypes.bool
};

AuthContainer.defaultProps = {
  user: null,
  initialised: false,
  openRegistrationForm: false
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  initialised: state.auth.initialised,
  openRegistrationForm: state.auth.openRegistrationForm
});

export default connect(mapStateToProps)(AuthContainer);  // Connects the Component to the Redux Store
