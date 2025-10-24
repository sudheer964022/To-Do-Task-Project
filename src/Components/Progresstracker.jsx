export default function Progresstracker({ tasks = [] }) {
  const safeTasks = Array.isArray(tasks) ? tasks : [];
  const completedTasks = safeTasks.filter((t) => !!t?.completed).length;
  const totalTasks = safeTasks.length;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  const progressPercent = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-tracker">
      <p title= "Task Completion Progress">
        {completedTasks} out of {totalTasks} tasks completed ({progressPercent}%)
      </p>
      <div className="progress-bar" title="Progress Bar">
        <div className="progress" style={{ width: `${progressPercent}%` }} />
      </div>
    </div>
  );
}