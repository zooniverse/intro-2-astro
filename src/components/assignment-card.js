import React, {Component} from 'react';

class AssignmentCard extends Component {
  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        {this.props.links.map((link, index) => {
          return (
            <button key={index}><a href={link.url}>{link.text}</a></button>
          )
        })}
      </div>
    )
  }
}

const { string, array } = React.PropTypes

AssignmentCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  links: array,
}

export default AssignmentCard;
