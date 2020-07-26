import React from "react";

const TextInput = ({ onChange, onSubmit, todo }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="todo"
          placeholder="add a task"
          value={todo}
          onChange={onChange}
        />
        <button type="submit" onClick={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TextInput;
