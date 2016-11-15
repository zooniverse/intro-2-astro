import React, {Component} from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class Home extends Component {
  render(){
    return (
      <div>
        <h1>{`Welcome to Intro 2 Astro!`}</h1>
        <h2>{`Please choose one...`}</h2>
        <div>
          <Button><Link to='/classrooms'>Educator</Link></Button>
          <Button><Link to='/student'>Student</Link></Button>
        </div>
      </div>
    )
  }
}

export default Home;
