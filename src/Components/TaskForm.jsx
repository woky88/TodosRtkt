import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../app/features/tasks/taskSlice.js'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import style from './TaskForm.module.css'

function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      dispatch(editTask(task))
    } else {

      if (tasks.length < 6) {
        dispatch(addTask({
          ...task,
          id: uuid()
        }))
      } else {
        alert("You can`t add more than 6 tasks")
      }
    }
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [])

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={e => handleSubmit(e)}>
        <div className={style.title}>
          <label htmlFor="title"> Title :</label>
          <input
            onChange={e => handleChange(e)}
            name='title' type="text"
            placeholder="title"
            value={task.title}
            className={style.input}
          />
        </div>
        <div className={style.title}>
          <label htmlFor="title"> Description :</label>
          <textarea
            onChange={e => handleChange(e)}
            name="description"
            placeholder="description"
            value={task.description}
            className={style.input}
          />
        </div>
        <button className={style.btn} type="submit"><h1>Submit</h1></button>
      </form>
    </div>
  )
}

export default TaskForm