import React, {Component} from 'react';

class AssignmentCard extends Component {
  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

const { string } = React.PropTypes

AssignmentCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired
}

export default AssignmentCard;
