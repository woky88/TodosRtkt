import './App.css';
import { useSelector } from 'react-redux'
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
