import React, { PropTypes} from "react";
import RemoveButton from "./RemoveButton";

/**
* 表示するタスク１つ１つのコンポーネント
*/

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemoveButton: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

/**
* 打ち消し線(toggle)の表示非表示(eventはチェックボックスから.)
* 引数の{}の中身がTodoAppが受け取る引数のeventである。
*/

  handleChange(event) {
    this.props.onToggleCompleted({
      id:this.props.id,
      completed:event.target.checked,
    });
  };

/**
* 削除ボタン(リンク)の表示の有無
* カーソルがタスクの上にのったら表示する。
*/

  handleMouseOver() {
    this.setState({ showRemoveButton: true });
  };
  handleMouseOut() {
    this.setState({ showRemoveButton: false });
  };

/**
* 削除ボタンが押された時
*/

  handleClickRemove(event) {
    this.props.onRemove({ id:this.props.id });
  };

  render() {
    const { text, completed } = this.props;
    const { showRemoveButton } = this.state;

    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        >
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleChange}
          />
        {completed ? <s>{text}</s>: text}
        <RemoveButton
          show={showRemoveButton}
          onClick={this.handleClickRemove}
          />
      </div>
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
