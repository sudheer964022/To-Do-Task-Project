
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const PriorityIndicator = ({ priority }) => (
  <div className={`priority-indicator priority-${priority}`} title={`Priority: ${priority}`}>
    <div className="wave"></div>
  </div>
);

const CompleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width="15"
    height="15"
    style={{ '--icon-fill': '#22c55e', '--icon-stroke': '#ffffff' }}
  >
    <circle cx="12" cy="12" r="10" fill="var(--icon-fill)" />
    <path
      d="M7 12.5l3 3 7-7"
      fill="none"
      stroke="var(--icon-stroke)"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UndoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width="15"
    height="15"
    style={{ '--icon-stroke': '#6b7280' }}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="var(--icon-stroke)"
      strokeWidth="1.8"
    />
    <path
      d="M12 8l-3 3 3 3M9 11h6a3 3 0 010 6"
      fill="none"
      stroke="var(--icon-stroke)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TaskItem({ task, index, updateTask, deleteTask }) {
  const toggleComplete = () => {
    const updatedTask = { ...task, completed: !task.completed };
    updateTask(updatedTask, index);
  };

  const handleCompleteClick = () => {
    if (!task?.completed) {
      const confirmComplete = window.confirm('Did you complete this task?');
      if (confirmComplete) toggleComplete();
      return;
    }

    const confirmUndo = window.confirm('Do you want to mark this task as incomplete?');
    if (confirmUndo) toggleComplete();
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('Do you want to delete this task?');
    if (confirmDelete) deleteTask(index);
  };

  return (
    <li
      className={`task-item flex justify-between items-center bg-white shadow-sm p-3 rounded-lg ${
        task.completed ? 'opacity-80' : ''
      }`}
    >
      <div className="task-left flex flex-col justify-center flex-1 min-w-0">
        <span
          className={`task-text font-medium break-words ${
            task.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {task.text}
        </span>
        <small className="meta text-gray-500 text-sm">
          ({task.priority}, {task.category})
        </small>
      </div>

      <div className="task-actions flex items-center gap-3 ml-4">
        <PriorityIndicator priority={task.priority} />
        <button
          className="btn btn-primary flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium"
          onClick={handleCompleteClick}
          title={task.completed ? 'Undo' : 'Complete'}
        >
          {task.completed ? <UndoIcon /> : <CompleteIcon />}
          {task.completed ? 'Undo' : 'Complete'}
        </button>

        <button
          className="btn btn-danger flex items-center justify-center p-2 rounded-md text-white bg-red-500 hover:bg-red-600"
          onClick={handleDeleteClick}
          aria-label={`Delete ${task.text}`}
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
