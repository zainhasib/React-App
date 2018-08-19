import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="items">
        <strong>ID: </strong>{this.props.project.id}<br/>
        <strong>Title: </strong>{this.props.project.title}<br/>
        <strong>Category: </strong>{this.props.project.category}<br/>
        <strong>Description: </strong>{this.props.project.description}<br/>
      </li>
    );
  }
}

export default ProjectItem;
