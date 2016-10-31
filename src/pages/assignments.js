import React, {Component} from 'react';

import AssignmentCard from '../components/assignment-card'

class Assignments extends Component {
  render(){
    return (
      <div>
        <h1>Assignments</h1>
        <AssignmentCard title='Kewl Title #1' description='Lots of kewl stuff goes here ok yeah this is me typing.'/>
        <AssignmentCard title='Kewl Title #2' description='Lots of kewl stuff goes here ok yeah this is me typing.'/>
        <AssignmentCard title='Kewl Title #999' description='Lots of kewl stuff goes here ok yeah this is me typing.'/>
      </div>
    )
  }
}

export default Assignments;
