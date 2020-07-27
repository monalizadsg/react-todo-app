import React from "react";
import "./App.css";

const StatusTab = ({ displayAll, displayActive }) => {
  return (
    <div className="tab">
      <button onClick={() => displayAll()} className="all">
        All
      </button>
      <button onClick={() => displayActive} className="active">
        Active
      </button>
      <button className="completed">Completed</button>
    </div>
  );
};

export default StatusTab;
