import React, { PropTypes } from "react";
import {Form} from "reactstrap";
import TextField from "material-ui/TextField"

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
      this.setState({ input:"" });
    };
  };

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextField
          id="task"
          floatingLabelText="Your task is ..."
          fullWidth={true}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
};

TaskForm.PropTypes = {
  onAdd:PropTypes.func.isRequired,
};

export default TaskForm;
