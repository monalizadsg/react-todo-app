import React from "react";

const DeleteButton = ({ onDelete }) => {
  return (
    <div>
      <button onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default DeleteButton;
