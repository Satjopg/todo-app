import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoApp from "./TodoApp";
import './index.css';

injectTapEventPlugin();

/**
* defaulttasksを定義し、localStorageにあったら代入する。
* このときlocalStorageにはJSONで入っているので元に戻す。
*/

let defaultTasks = [];
if (typeof localStorage.tasks !== "undefined") {
  defaultTasks = JSON.parse(localStorage.tasks);
}

const app = render(
  <MuiThemeProvider>
    <TodoApp defaultTasks={defaultTasks} />
  </MuiThemeProvider>,
  document.getElementById('root')
);

/**
* beforeunload:更新される前に。
* localStorageのtasksに現在のtasksをJSON形式にして保存する。
*/
window.addEventListener("beforeunload", function() {
  localStorage.tasks = JSON.stringify(app.getTasks());
});
