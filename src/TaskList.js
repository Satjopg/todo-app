import React, { PropTypes } from "react";

function TaskList(props) {
  const lists = props.tasks.map(function (task, index) {
    return <li key={index}>{task}</li>
  });
  return <ul>{lists}</ul>
};

TaskList.propTypes = {
  tasks:PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default TaskList
