import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
