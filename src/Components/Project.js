import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Project extends Component {
  render() {
    let projectItem;
    if(this.props.project) {
      projectItem = this.props.project.map(p => {
        return (
          <ProjectItem key={p.title} project={p} />
        );
      });
    }
    return (
      <div className="Project">
        <div className="projectItem">
        <h3>Your Projects are: </h3>
          {projectItem}
        </div>
      </div>
    );
  }
}

export default Project;
