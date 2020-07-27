import React from "react";
import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";

const Todo = ({ todo, checked, changeStatus, onDelete }) => {
  const handleChange = (checked) => {
    changeStatus(todo.id, checked);
  };
  const className =
    "list-todo " + (todo.isCompleted === true ? "completed" : "pending");
  return (
    <div className={className}>
      <div>
        <CheckBox checked={todo.isCompleted} onChange={handleChange} />
        {todo.item}
      </div>
      {todo.isCompleted && <DeleteButton onDelete={onDelete} />}
    </div>
  );
};

export default Todo;
