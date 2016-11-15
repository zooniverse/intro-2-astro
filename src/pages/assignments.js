import React, {Component} from 'react';
import AssignmentCard from '../components/assignment-card';
import { assignments } from '../constants/assignments';

class AssignmentsWrapper extends Component {
  render(){
    return (
      <div>
        <h1>Assignments</h1>

        {assignments.map((assignment) => {
          return(
            <AssignmentCard key={assignment.id} {...assignment}/>
          )
        })}

        <section>
          <div>
            <small>{`This material is based upon work supported by the National Science Foundation under Grant Number NSF-IUSE 1524189. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.`}</small>
          </div>
        </section>
      </div>
    )
  }
}

export default AssignmentsWrapper;
