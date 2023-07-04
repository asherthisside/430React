import React from 'react'
import { useSelector } from 'react-redux'

export default function Tasklist() {
    const tasks = useSelector((state) => state.todo.tasks)

    return (
        <div className='tasklist'>
            <h3>Your Tasks: </h3>
        {
            tasks.map((task) => {
                (
                    <li key={task.id}>
                        {task.text}
                        <button>Delete</button>
                    </li>
                )
            })
        }
        </div>
    )
}