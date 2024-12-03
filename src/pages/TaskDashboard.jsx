import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilters from "../components/TaskFilter";

const TaskDashboard = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm />
      <TaskFilters setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
};

export default TaskDashboard;
