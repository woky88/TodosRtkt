import './App.css';
import TaskForm from './Components/TaskForm.jsx';
import TaskList from './Components/TaskList.jsx';
import NavBar from './Components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <div className="flex">
        <div className='flex-row items-center justify-center h-full w-full'>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<TaskList />} />
              <Route path='/createTask' element={<TaskForm />} />
              <Route path='/editTask/:id' element={<TaskForm />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
