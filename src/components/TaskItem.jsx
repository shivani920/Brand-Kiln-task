import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../features/tasks/tasksSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      <button onClick={() => dispatch(toggleComplete(task.id))}>
        {task.completed ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
