import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const LogoutButton = ({ label, logout, user }) => {
  return (
    <div className="logout-button">
      <span>{user.display_name}</span>
      <Button type="button" className="site-header__button--as-link" onClick={logout} label={label} plain={true} />
    </div>
  );
};

LogoutButton.defaultProps = {
  label: 'Logout',
  logout: () => {},
  user: {}
}

LogoutButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    display_name: PropTypes.string,
  }).isRequired,
};

export default LogoutButton;
