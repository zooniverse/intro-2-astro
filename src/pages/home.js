import React, {Component} from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render(){
    return (
      <div>
        <h1>Click one...</h1>
        <Link to="student">Student</Link>
        <br />
        <Link to="educator">Educator</Link>
      </div>
    )
  }
}

export default Home;
