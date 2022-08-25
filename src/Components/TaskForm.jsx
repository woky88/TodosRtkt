import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../app/features/tasks/taskSlice.js'

function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask(task))
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input onChange={e => handleChange(e)} name='title' type="text" placeholder="title" />
      <textarea onChange={e => handleChange(e)} name="description" placeholder="description"></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TaskForm