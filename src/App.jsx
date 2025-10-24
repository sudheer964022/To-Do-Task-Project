import React, { useEffect, useState } from "react";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import NoTaskIcon from "./Components/NoTaskIcon";
import { FaTrash } from "react-icons/fa";
import "./Style.css";

export default function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    const confirmClear = window.confirm("Do you want to clear all tasks?");
    if (confirmClear) {
      setTasks([]); 
      localStorage.removeItem("tasks");
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="headtitle">To Do Task Manager</h1>
        <p className="subtitle">Welcome to your task manager</p>

        <Taskform addTask={addTask} />
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />

        {tasks.length === 0 ? (
          <div className="empty-state" role="status" aria-live="polite" title="No Task Is Added">
            <NoTaskIcon />
            <p className="empty-title">No Task Is added</p>
            <p className="empty-sub">Add your first task using the form above.</p>
          </div>
        ) : null}

        <Progresstracker tasks={tasks} />

        {tasks.length > 0 && (
          <div className="controls">
            <button className="btn btn-clear" onClick={clearAllTasks} title="Clear All tasks">
              <FaTrash />
              Clear all tasks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
