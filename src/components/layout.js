import React, { Component } from 'react';

import Nav from './nav';
import Footer from './footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
