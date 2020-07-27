import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoItems, checked, changeStatus, onDelete }) => {
  const todos = todoItems.map((todo, index) => (
    <li key={index} className="list-item">
      <Todo
        todo={todo}
        changeStatus={() => changeStatus(todo.id, checked)}
        onDelete={() => onDelete(todo.id)}
      />
    </li>
  ));
  return <div className="list-wrapper">{todos}</div>;
};

export default TodoList;
