import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories: ['Web Development', 'Web Design', 'Mobile Development']
    }
    handleSubmit(e) {
        if(this.refs.title.value === "") {
            alert('Title is required!');
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus voluptatem alias necessitatibus possimus sed aperiam quibusdam aspernatur mollitia rerum? Dignissimos dolore quam veniam recusandae sed id quaerat at doloremque.',
                    category: this.refs.category.value
                }
            }, () => {
                this.props.addProject(this.state.newProject);
            });
        }
        this.refs.title.value = "";
        e.preventDefault();
    }
    render() {
        let categoryOptions = this.props.categories.map(item => {
            return <option key={item} value={item}>{item}</option>
        });
        return (
            <div className="AddProjects">
                <h1>ADD PROJECT</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-div">
                        <label>Enter the Title </label>
                        <input type="text" ref="title" />
                    </div>
                    <div className="form-div">
                        <label>Choose </label>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <div className="form-div">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;
