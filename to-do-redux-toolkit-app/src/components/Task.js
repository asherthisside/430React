import React from 'react'
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addTodo } from '../features/todo/todoSlice';


export default function Task() {
    const dispatch = useDispatch();
    const inputRef = useRef(null)

    const addNewTask = () => {
        const task = inputRef.current.value;
        if (task !== "") {
            dispatch(addTodo(task));
            inputRef.current.value = ""
        }
    }

    return (
        <div>
            <div className='add-task'>
                <input type="text" name="" id="" placeholder='Enter task here' ref={inputRef}/>
            </div>

            <button onClick={addNewTask}>Add Task</button>
        </div>
    )
}
