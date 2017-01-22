import React, { PropTypes} from "react";
//import RemoveButton from "./RemoveButton";
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { red500 } from 'material-ui/styles/colors';

/**
* 表示するタスク１つ１つのコンポーネント
*/

class Task extends React.Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      showRemoveButton: false,
    };
    */
    this.handleChange = this.handleChange.bind(this);
//  this.handleMouseOver = this.handleMouseOver.bind(this);
//  this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

/**
* 打ち消し線(toggle)の表示非表示(eventはチェックボックスから.)
* 引数の{}の中身がTodoAppが受け取る引数のeventである。
*/

  handleChange(event) {
    this.props.onToggleCompleted({
      id:this.props.id,
      completed:event.target.checked
    });
  };

/**
* 削除ボタン(リンク)の表示の有無
* カーソルがタスクの上にのったら表示する。


  handleMouseOver() {
    this.setState({ showRemoveButton: true });
  };
  handleMouseOut() {
    this.setState({ showRemoveButton: false });
  };
*/

/**
* 削除ボタンが押された時
*/

  handleClickRemove(event) {
    this.props.onRemove({ id:this.props.id });
  };

  render() {
    const { text, completed } = this.props;
    //const { showRemoveButton } = this.state;
    const checkbox = (
      <Checkbox
        checked={completed}
        onCheck={this.handleChange}
      />
    );

    const removeButton = (
      <IconButton
        iconClassName="material-icons"
        iconStyle={{ color:red500 }}
        onClick={this.handleClickRemove}
      >
        delete_task
      </IconButton>
    );

    return (
      <ListItem
        leftCheckbox={checkbox}
        primaryText={completed ? <s>{text}</s> : text}
        rightIconButton={removeButton}
      />
    );
  };
};

Task.propTypes = {
  id:PropTypes.number.isRequired,
  text:PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired,
  onToggleCompleted:PropTypes.func.isRequired,
  onRemove:PropTypes.func.isRequired,
};

export default Task;
