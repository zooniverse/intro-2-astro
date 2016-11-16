import React, {Component} from 'react';
import ClassroomCard from '../components/classroom-card';
import { classrooms } from '../constants/classrooms';

import { Button } from 'react-bootstrap';

class ClassroomsWrapper extends Component {
  render(){
    return (
      <div>
        <h1>{`Educator page...`}</h1>
        <Button>{`Create a new classroom`}</Button>

        {classrooms.map((classroom) => {
          return(
            <ClassroomCard key={classroom.id} {...classroom}/>
          )
        })}

      </div>
    )
  }
}

export default ClassroomsWrapper;
