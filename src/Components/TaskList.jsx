import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../app/features/tasks/taskSlice'
import { Link } from 'react-router-dom'
import style from '../Components/TaskList.module.css'
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri'

function TaskList() {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className='flex items-center justify-center'>
      <div className={style.grid}>
        {
          tasks.map(task => (
            <div key={task.id} className={style.card}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task.id)}><RiDeleteBin6Line /></button>
              <Link to={`/editTask/${task.id}`}>
                <button><RiEdit2Line /></button>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TaskList