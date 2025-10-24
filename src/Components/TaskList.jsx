import { FaTrash } from "react-icons/fa";
import PriorityIndicator from "./PriorityIndicator";

export default function TaskList({ tasks = [], updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  const handleCompleteClick = (index) => {
    const task = tasks[index];
    if (!task?.completed) {
      const confirmComplete = window.confirm("Did you complete this task?");
      if (confirmComplete) toggleComplete(index);
      return;
    }

    const confirmUndo = window.confirm("Do you want to mark this task as incomplete?");
    if (confirmUndo) toggleComplete(index);
  };

  const handleDeleteClick = (index) => {
    const confirmDelete = window.confirm("Do you want to delete this task?");
    if (confirmDelete) deleteTask(index);
  };

  const CompleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
      style={{ "--icon-fill": "#22c55e", "--icon-stroke": "#ffffff" }}>
      <circle cx="12" cy="12" r="10" fill="var(--icon-fill)" />
      <path d="M7 12.5l3 3 7-7" fill="none" stroke="var(--icon-stroke)"
        strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const UndoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
      style={{ "--icon-stroke": "#fbfbfbff" }}>
      <circle cx="12" cy="12" r="10" fill="#22c55e" stroke="var(--icon-stroke)" strokeWidth="2.0" />
      <path d="M12 8l-3 3 3 3M9 11h6a3 3 0 010 6"
        fill="none" stroke="var(--icon-stroke)" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <ul className="task-list space-y-3">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task-item flex justify-between items-center bg-white shadow-sm p-3 rounded-lg ${
            task.completed ? "opacity-80" : ""
          }`}
        >
          {/* Left Side: Task Text */}
          <div className="task-left flex flex-col justify-center flex-1 min-w-0">
            <span
              className={`task-text font-medium break-words ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.text}
            </span>
            <small className="meta text-gray-500 text-sm">
              ({task.priority}, {task.category})
            </small>
          </div>

          {/* Right Side: Priority + Actions */}
          <div className="task-actions flex items-center gap-3 ml-4">
            {/* ✅ NEW PRIORITY INDICATOR */}
            <PriorityIndicator priority={task.priority} />

            <button
              className="btn btn-primary flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium"
              onClick={() => handleCompleteClick(index)}
              title={task.completed ? "Undo" : "Complete"}
            >
              {task.completed ? <UndoIcon /> : <CompleteIcon />}
            </button>

            <button
              className="btn btn-danger flex items-center justify-center p-2 rounded-md text-white bg-red-500 hover:bg-red-600"
              onClick={() => handleDeleteClick(index)}
              aria-label={`Delete ${task.text}`}
              title="Delete"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
