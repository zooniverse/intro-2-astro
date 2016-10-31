import React, { Component } from 'react';

import NavbarInstance from './nav';
import Footer from './footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <NavbarInstance/>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
