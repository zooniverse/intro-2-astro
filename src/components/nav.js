import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

import NavAuth from './nav-auth';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar className='navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Intro 2 Astro</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <Link to='/classrooms'>Classrooms</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to='/assignments'>Assignments</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to='/resources'>Resources</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <NavAuth/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarInstance;
