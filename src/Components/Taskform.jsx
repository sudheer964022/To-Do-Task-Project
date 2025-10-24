import { useState } from "react"

export default function Taskform({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('general');

  const handlesubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;
    addTask({ text: trimmed, priority, category, completed: false });

    setTask('');
    setPriority("medium");
    setCategory("general");
  }

  const Add = () => (
   <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16" height="16"
      role="img"
      aria-labelledby="addtask-title addtask-desc"
      style={{ '--icon-fill': '#22c55e', '--icon-stroke': '#ffffff' }}>
      <title id="addtask-title">Add Task</title>
      <desc id="addtask-desc">A green circle with a white plus symbol indicating add new task</desc>

      <circle cx="12" cy="12" r="10" fill="var(--icon-fill)" />
      <path d="M12 8v8M8 12h8"
            fill="none"
            stroke="var(--icon-stroke)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>
  );

  return (
    <form onSubmit={handlesubmit} className="task-form">
      <div className="row" id="inp">
        <input
          className="task-input"
          type="text"
          placeholder="Enter the Task"
          title="Enter your Task"
          value={task} 
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-add" title="Add Task"><Add /> Add Task</button>
      </div>

      <div className="row" id="btns" title="Select Priority">
        <select className="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high" title="High">High</option>
          <option value="medium" title="Medium">Medium</option>
          <option value="low" title="Low">Low</option> 
        </select>

        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)} title="Select Category">
          <option value="general" title="General">General</option>
          <option value="work" title="Work">Work</option>
          <option value="personal" title="Personal">Personal</option>
        </select>
      </div>
    </form>
  )
}