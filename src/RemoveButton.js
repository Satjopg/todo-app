import React, { PropTypes } from "react";

/**
* 削除ボタンのコンポーネント
*/

function RemoveButton(props) {
  return (
    <a
      href="#"
      style={{
        color:"red",
        visibility:props.show ? "visible":"hidden"
      }}
      onClick={event => {
        event.preventDefault();
        props.onClick(event)
      }}
      >削除</a>
  )
}

RemoveButton.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
