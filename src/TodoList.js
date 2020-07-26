import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todoItems,
  checked,
  onChange,
  onDelete,
  onDeleteAllItems,
}) => {
  return (
    <div>
      {todoItems.map((todo, index) => (
        <li key={index}>
          <Todo
            item={todo.item}
            checked={checked}
            onChange={onChange}
            onDelete={() => onDelete(todo.id)}
          />
          <button onClick={onDeleteAllItems}>Delete All</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
