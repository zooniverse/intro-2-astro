import React from 'react';
import PropTypes from 'prop-types';
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import { ZooniverseLogo } from 'zooniverse-react-components';
import { NavLink } from 'react-router-dom';
import AuthContainer from '../containers/AuthContainer';

const ZooHeader = (props) => {
  return (
    <Header justify="between" className="site-header" direction="row" size="small" responsive={true}>
      <Menu align="center" direction="row" size="small" responsive={true}>
        <NavLink className="site-header__link" to={props.homeLink}>
          <ZooniverseLogo className="zooniverse-logo" height="1.25em" width="1.25em" />
        </NavLink>
        <ul className="site-header__nav-list">
          {props.navList.map(navItem => <li key={navItem.title} className="site-header__nav-list-item"><NavLink className="site-header__link--small" to={navItem.to}>{navItem.title}</NavLink></li>)}
        </ul>
      </Menu>
      <AuthContainer />
    </Header>
  );
};

ZooHeader.defaultProps = {
  a11yTitle: 'Zooniverse Home',
  homeLink: '/',
  navList: [
    { to: '/about', title: 'About' }
  ]
};

ZooHeader.propTypes = {
  a11yTitle: PropTypes.string,
  homeLink: PropTypes.string,
  navList: PropTypes.arrayOf(PropTypes.object)
};

export default ZooHeader;
