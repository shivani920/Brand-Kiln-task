import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = ({ filter }) => {
  const tasks = useSelector(state => state.tasks);

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case "completed":
        return task.completed;
      case "pending":
        return !task.completed && new Date(task.dueDate) >= new Date();
      case "overdue":
        return !task.completed && new Date(task.dueDate) < new Date();
      default:
        return true;
    }
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
