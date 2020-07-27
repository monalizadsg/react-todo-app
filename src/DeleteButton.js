import React from "react";

const DeleteButton = ({ onDelete, className }) => {
  return (
    <div className={className}>
      <button onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default DeleteButton;
