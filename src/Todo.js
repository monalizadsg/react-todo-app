import React from "react";

const Todo = ({ item, checked, onChange, onDelete }) => {
  return (
    <div className="list-item">
      <input
        name="isCompleted"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {item}
      <button onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
