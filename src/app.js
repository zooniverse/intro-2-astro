import React, { Component } from 'react';
import './app.css';

class BasicApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav">
          this is the navbar blah (put your navigation here)
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BasicApp;
