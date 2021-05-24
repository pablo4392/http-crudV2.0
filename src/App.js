import { useState, useEffect } from "react";
import './App.css';
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import read from './services/read';

const baseUrl = "https://todos-go.herokuapp.com/api/todos"

function App() {
  const [taskData, setTaskData] = useState([])

  useEffect(() => {
    read(baseUrl).then(response => {
      console.log(response.data.todos)
      setTaskData(response.data.todos)
    })
  }, [])

  const newTasks = taskData.map(value => (
    <Tasks 
      key={value.id}
      student={value.student.toUpperCase()}
      task={value.task}
    />
  ))

  return (
    <div className="App-header">
      <CreateTask />
      {newTasks}
    </div>
  );
}

export default App;
