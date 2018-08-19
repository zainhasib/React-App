import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Project from './Components/Project.js';
import AddProject from './Components/AddProject.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Web Development',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus voluptatem alias necessitatibus possimus sed aperiam quibusdam aspernatur mollitia rerum? Dignissimos dolore quam veniam recusandae sed id quaerat at doloremque.',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Software Development',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus voluptatem alias necessitatibus possimus sed aperiam quibusdam aspernatur mollitia rerum? Dignissimos dolore quam veniam recusandae sed id quaerat at doloremque.',
          category: 'Mobile Development'
        }
      ]
    })
  }
  handleAddProject(project) {
    let proj = this.state.projects;
    proj.push(project);
    this.setState({
      projects: proj
    })
  }
  render() {
    return (
      <div className="App">
        <section>
          <AddProject addProject={this.handleAddProject.bind(this)}/>
        </section>
        <section>
          <Project project={this.state.projects} />
        </section>
      </div>
    );
  }
}

export default App;
