import React from "react";
import "./TaskFilters.css"; // Import the CSS file for styles

const TaskFilter = ({ setFilter }) => {
  return (
    <div className="task-filters">
      <button onClick={() => setFilter("all")} className="filter-button">
        All Tasks
      </button>
      <button onClick={() => setFilter("completed")} className="filter-button">
        Completed
      </button>
      <button onClick={() => setFilter("pending")} className="filter-button">
        Pending
      </button>
      <button onClick={() => setFilter("overdue")} className="filter-button">
        Overdue
      </button>
    </div>
  );
};

export default TaskFilter;

