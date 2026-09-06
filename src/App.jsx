import "./App.css";

import TaskInput from "./TaskInput.jsx"
import { useState } from "react";
import TaskList from "./TaskList.jsx";
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") {
      alert("Введите текст задачи");
      return;
    }
    setTasks([...tasks, {id:Date.now(), text: inputValue}]);
    setInputValue("");
  };
  const handleDeleteTask=(id)=> {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="app">
      <h1>Мой список дел</h1>
      <TaskInput inputValue={inputValue} setInputValue={setInputValue} onAddTask={handleAddTask}></TaskInput>
      
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      <p>Задачи: {tasks.length}</p>
      
    </div>
  );
}
export default App;