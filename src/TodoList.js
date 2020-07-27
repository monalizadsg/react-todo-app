import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoItems, checked, onChange, onDelete }) => {
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
        </li>
      ))}
    </div>
  );
};

export default TodoList;
