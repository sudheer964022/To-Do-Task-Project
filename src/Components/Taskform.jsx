import React from 'react'

export default function Taskform() {
    return (
        <>
           <form>
             <div>
                <input type="text" placeholder="Enter your task here" title='Enter your task here' />
                <button type='submit'>Add Task</button>
            </div>
            <div>
                <select>
                    <option value="high" title='higher Priority'>High</option>
                    <option value="medium" title='medium Priority'>Medium</option>
                    <option value="low" title='low Priority'>Low</option>
                </select>
                <select>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
           </form>
        </>
    )
}