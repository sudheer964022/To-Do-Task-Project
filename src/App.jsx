import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"

export default function App() {
  return (
    <>
      <div>
        <h1>To Do Task</h1>
        <p>Welcome to Task Buddy</p>
        <Taskform />
        <TaskList />
        <Progresstracker />
        <button>Clear All Tasks</button>
      </div>
    </>
  )
}

