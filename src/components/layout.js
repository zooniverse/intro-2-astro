import React, { Component } from 'react';

import NavbarInstance from './nav';
import Footer from './footer';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <NavbarInstance/>
        <main className='main'>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
