export const selectTasks = state => state.tasks;

export const selectFilteredTasks = (state, filter) => {
  const tasks = state.tasks;
  const currentDate = new Date();

  switch (filter) {
    case "completed":
      return tasks.filter(task => task.completed);
    case "pending":
      return tasks.filter(task => !task.completed);
    case "overdue":
      return tasks.filter(task => new Date(task.dueDate) < currentDate && !task.completed);
    default:
      return tasks;
  }
};
