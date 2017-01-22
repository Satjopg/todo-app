import React from 'react';
import {render} from 'react-dom';
import TodoApp from "./TodoApp";
import './index.css';

/**
* defaulttasksを定義し、localStorageにあったら代入する。
* このときlocalStorageにはJSONで入っているので元に戻す。
*/
let defaulttasks = [];
if (typeof localStorage.tasks !== "undefined") {
  defaulttasks = JSON.parse(localStorage.tasks);
}

const app = render(
  <TodoApp defaulttasks={defaulttasks} />,
  document.getElementById('root')
);

/**
* beforeunload:更新される前に。
* localStorageのtasksに現在のtasksをJSON形式にして保存する。
*/
window.addEventListener("beforeunload", function() {
  localStorage.tasks = JSON.stringify(app.getTasks());
});
