import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './NavBar.module.css'

export default function NavBar() {

  const tasks = useSelector(state => state.tasks)

  return (
    <div className='mt-3 mb-8 mr-8 flex-row justify-center w-full text-white'>
      <header className='flex justify-around'>
        <Link to='/' className='bg-indigo-600 px-3 py-3 rounded-sm'>
          <button>Home</button>
        </Link>

        <h1 className='mt-3 text-xl'>Total Tasks : {tasks.length}</h1>
        <Link to='/createTask' className='bg-red-600 px-3 py-3 rounded-sm'>
          <button>Create</button>
        </Link>

      </header>
    </div>
  )
}