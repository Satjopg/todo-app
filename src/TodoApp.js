import React, { PropTypes } from "react";
//import { Container } from "reactstrap";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm"
import Task from "./Task";

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks:props.defaultTasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  };

/**
* AddTaskではTaskの中身を変化させているためTaskの値を管理しているここで定義する。
* props等で渡された値の変更は許されていないためである。
*/

  handleAddTask(text) {
    this.setState({
      tasks:this.state.tasks.concat({
        text:text,
        completed:false
      })
    });
  };

  handleToggleCompleted(event) {
    const newTasks = this.state.tasks.map((task, index) =>{
      if(event.id === index) {
        task.completed = event.completed
      }
      return task;
    });
    this.setState({ tasks:newTasks });
  };

  handleRemove(event) {
    const {tasks} = this.state;
    const newTasks = tasks.filter((_, index) => (event.id !== index));
    this.setState({ tasks:newTasks });
  };

  render() {
    const tasks = this.state.tasks.map((task, index) => (
      <Task
        id={index}
        onToggleCompleted={this.handleToggleCompleted}
        onRemove={this.handleRemove}
        {...task}
      />
    ));
    return (
      <div>
        <h1>ToDo List!!</h1>
        <TaskForm onAdd={this.handleAddTask} />
        <TaskList tasks={tasks}/>
      </div>
    );
  }

/**
* 現在登録されているtaskを返す関数.
* localstorageへの保存時に利用
*/
  getTasks() {
    return this.state.tasks;
  }
}

TodoApp.propTypes = {
  defaultTasks: PropTypes.arrayOf(
    PropTypes.shape({
      text:PropTypes.string,
      completed:PropTypes.bool
    })
  ).isRequired
};

export default TodoApp;
