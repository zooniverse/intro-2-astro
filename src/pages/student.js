import React, {Component} from 'react';
import { Link } from 'react-router';

class Student extends Component {
  render(){
    return (
      <div className='intro'>
        <div className='intro-body'>
          <div className='container paragraph-underlay  '>
            <h1>Welcome to the Astro 101 tools!</h1>
            <p className='large'>These tools have been developed to enable you, the student, to view, analyze, manipulate and visualize astronomical data.</p>
            <p>The activities on this webpage are being developed as part of a National Science Foundation funded project to give introductory astronomy students hands-on experience of what astronomers do - collect and analyze data in order to answer research questions. By trying these activities out this semester, you’ll be helping our team of astronomers, educators and developers improve the use and impact of these tools. At the same time, you'll get to be the first students exploring material for AST 1001 in this new way. Thanks for taking part!</p>
            <button><Link to='/assignments'>View Assignments</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Student;
