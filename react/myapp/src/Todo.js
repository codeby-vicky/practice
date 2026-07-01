import React, { useState } from "react";

const Todo = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "Learn React",
            completed: false
        },
        {
            id: 2,
            task: "Practice JavaScript",
            completed: false
        },
        {
            id: 3,
            task: "Build Project",
            completed: false
        }
    ]);

    const [input, setInput] = useState("");

    const handleAdd = () => {

    if(input==="")
    {
        return;
    }

    const newTask = {

        id: tasks.length + 1,

        task: input,

        completed:false

    }

    setTasks([...tasks,newTask])

    setInput("")

}

const handleDelete=(id)=>{

    const total=tasks.filter((task)=>{

        return task.id!==id

    })

    setTasks(total)

}

const handleEdit=(id)=>{

    const value=prompt("Enter New Task")

    const total=tasks.map((task)=>{

        if(task.id===id)
        {

            return{

                ...task,

                task:value

            }

        }

        return task

    })

    setTasks(total)

}

const handleComplete = (id) => {

    const total = tasks.map((task) => {

        if(task.id === id)
        {
            return {
                ...task,
                completed: !task.completed
            }
        }

        return task

    })

    setTasks(total)

}

    return (
        <div>

            <h1>Todo App</h1>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Task"
            />

            <button onClick={handleAdd}>Add</button>

            {
                tasks.map((task) => {

                    return (

                        <div key={task.id}>

                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleComplete(task.id)}
                            />

                            <span
                            style={{textDecoration:task.completed?
                            "line-through":"none"}}>

                            {task.task}

                            </span>

                            <button
                                onClick={()=>handleEdit(task.id)}
                                >Edit
                            </button>

                            <button
                            onClick={()=>handleDelete(task.id)}
                            >
                            Delete
                            </button>
                            <h3>Total : {tasks.length}</h3>
                            <h3>
                            Completed :
                            {
                            tasks.filter((task)=>{
                            return task.completed
                            }).length
                            }
                            </h3>
                            <h3>
                            Pending :
                            {
                            tasks.filter((task)=>{
                            return !task.completed
                            }).length
                            }
                            </h3>
                        </div>

                    )

                })
                
            }

        </div>
    )

}

export default Todo;