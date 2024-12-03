import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector(state => state.tasks.find(task => task.id === id));

  if (!task) return <p>Task not found</p>;

  return (
    <div className="container">
      <h1>Task Details</h1>
      <div className="card">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      </div>
      <button onClick={() => navigate("/tasks")}>Back to Tasks</button>
    </div>
  );
};

export default TaskDetails;
