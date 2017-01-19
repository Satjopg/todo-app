import React, { PropTypes } from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.setState({ input:event.target.value, });
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input) {
      this.props.onAdd(this.state.input)
      this.setState({ input:"", });
    };
  };

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <div>
            <p>{this.state.input}</p>
          </div>
        </form>
      </div>
    )
  }
};

TaskForm.PropTypes = {
  onAdd:PropTypes.func.isRequired,
};

export default TaskForm
