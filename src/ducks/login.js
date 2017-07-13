import { State, Effect, Actions } from 'jumpstate';
import oauth from 'panoptes-client/lib/oauth';

// Helper functions
const computeRedirectURL = (window) => {
  const { location } = window;
  return location.origin ||
    `${location.protocol}//${location.hostname}:${location.port}`;
};

// Synchronous Actions
const setLoginUser = (state, user) => {
  return { fetching: false, initialised: true, user };
};

const fetchingUser = (state, fetching) => {
  return { fetching };
};

const setError = (state, error) => {
  return { error };
};

// Effects are for async actions and get automatically to the global Actions list
Effect('checkLoginUser', () => {
  Actions.user.fetchingUser(true);
  oauth.checkCurrent()
    .then((user) => {
      Actions.user.setLoginUser(user);
      Actions.user.fetchingUser(false);
    }).catch((error) => {
      Actions.user.fetchingUser(false);
      Actions.user.setError(error);
    });
});

Effect('loginToPanoptes', () => {
  // Returns a login page URL for the user to navigate to.
  return (() => oauth.signIn(computeRedirectURL(window)));
});

Effect('logoutFromPanoptes', () => {
  Actions.user.fetchingUser(true);
  oauth.signOut()
    .then((user) => {
      Actions.user.setLoginUser(user);
      Actions.user.fetchingUser(false);
    });
});

const login = State('user', {
  // Initial State
  initial: {
    error: null,
    fetching: false,
    initialised: false,
    user: null
  },
  // Actions
  fetchingUser,
  setLoginUser,
  setError
});

export default login;
