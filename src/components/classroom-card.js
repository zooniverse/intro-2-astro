import React, {Component} from 'react';
import { Link } from 'react-router';
import { Badge, Button } from 'react-bootstrap';

class ClassroomCard extends Component {
  render(){
    return (
      <div>
        <h2>{`Classroom #${this.props.id}`}</h2>
        {this.props.students.map((studentID) => {
          return (
            <Badge key={studentID}>{studentID}</Badge>
          )
        })}
        <Button><Link to='/assignments'>Assignments</Link></Button>
      </div>
    )
  }
}

const { string, arrayOf } = React.PropTypes

ClassroomCard.propTypes = {
  id: string.isRequired,
  teachers: arrayOf(string),
  students: arrayOf(string),
  assignments: arrayOf(string),
}

export default ClassroomCard;
