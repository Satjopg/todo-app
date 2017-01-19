import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm"

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks:[],
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  };

/**
* AddTaskではTaskの中身を変化させているためTaskの値を管理しているここで定義する。
* props等で渡された値の変更は許されていないためである。
*/

  handleAddTask(task) {
    this.setState({
      tasks:this.state.tasks.concat(task)
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo List!!</h1>
        <TaskForm onAdd={this.handleAddTask} />
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default TodoApp
