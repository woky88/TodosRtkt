import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState, // Seria lo mismo initialState SOLO!
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload) // Esto en redux-toolkit esta permitido
    }
  }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer