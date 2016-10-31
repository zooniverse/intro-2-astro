import React, {Component} from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render(){
    return (
      <div>
        <h1>Welcome to Intro 2 Astro!</h1>
        <h2>Please choose one...</h2>
        <button><Link to='student'>Student</Link></button>
        <button><Link to='educator'>Educator</Link></button>
      </div>
    )
  }
}

export default Home;
