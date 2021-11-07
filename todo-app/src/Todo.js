import { useState } from 'react'
import data from "./data.js"

let nextId = 3;
function Todo() {
    const [list, setList] = useState(data);
    const [title, setTitle] = useState('')
    const [edit, setEdit] = useState(false)

    function addTodo(title) {
        setList([...list,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    function deleteTodo(todoId) {
        setList(list.filter(t => t.id !== todoId))
    }

    function toggle(event, todoId) {
        setList(prev => {
            const tempList = JSON.parse(JSON.stringify(prev))
            tempList[todoId].done = event.target.checked;
            return tempList;
        })
    }  

    return (
        <>
        <div>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
            {' '}
            <button onClick={() => {
                setTitle('');
                addTodo(title);
            }}>Add Task</button>
        </div>
            <ul>
                {list.map(task => {
                    return (
                    <li key={task.id}>
                    <input type='checkbox' checked={task.done} onChange={e => toggle(e, task.id)}
                    />
                    {task.title}
                    {' '}
                    <button onClick={()=> {}}>Edit</button>
                    {' '}
                    <button onClick={() => deleteTodo(task.id)}>Delete</button>
                    </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Todo

