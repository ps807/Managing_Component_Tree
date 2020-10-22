import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => !prevValue);
  }

  return (
    <li
      style={{ textDecoration: isDone ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
