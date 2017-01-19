import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm"
import Task from "./Task";

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks:[],
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this)
  };

/**
* AddTaskではTaskの中身を変化させているためTaskの値を管理しているここで定義する。
* props等で渡された値の変更は許されていないためである。
*/

  handleAddTask(text) {
    this.setState({
      tasks:this.state.tasks.concat({
        text:text,
        completed:false,
      })
    });
  };

  handleToggleCompleted(event) {
    const newTasks = this.state.tasks.map((task, index) =>{
      if(event.id === index) {
        task.completed = event.completed
      }
      return task
    });
    this.setState({ tasks:newTasks });
  };

  render() {
    const tasks = this.state.tasks.map((task, index) => {
      return (
        <Task
          id={index}
          onToggleCompleted={this.handleToggleCompleted}
          {...task}
        />
      );
    }, this);
    return (
      <div>
        <h1>ToDo List!!</h1>
        <TaskForm onAdd={this.handleAddTask} />
        <TaskList tasks={tasks}/>
      </div>
    );
  }
}

export default TodoApp
