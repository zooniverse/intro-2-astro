import React, {Component} from 'react';
import { Link } from 'react-router';
import { Button, ButtonGroup } from 'react-bootstrap';

class Home extends Component {
  render(){
    return (
      <div className='intro'>
        <div className='intro-body'>
          <div className='container'>
            <h1>Welcome to Intro 2 Astro!</h1>
            <h2>Please choose one...</h2>
            <div className="row">
              <Button className='btn btn-lg'><Link to='educator'>Educator</Link></Button>
              <Button  className='btn btn-lg'><Link to='student'>Student</Link></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
