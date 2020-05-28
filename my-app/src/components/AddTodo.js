// dependency imports
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialTask = {

    task: "",
    description: "",
    due_date: "06/01/2020",
    completed: false,
};

export default function AddTodo(props) {
    const { push } = useHistory();

    const [task, setTask] = useState(initialTask);
    //const [formDisabled, setFormDisabled] = useState(true)

    const handleChanges = (e) => {
        const value = e.target.value;
        setTask({
            ...task,
            [e.target.name]: value,
        });
    };

    const newTodo = (e) => {
        e.preventDefault();

        axiosWithAuth()
            .post("api/tasks", task)
            .then((res) => {
                console.log(res);
                props.setTodoList(res.data.newTask.task);
                setTask(initialTask);
            })
            .catch((err) => {
                console.log("ERROR ADDTODO:", err);
            });
    };

    return (
        <div>
            <h2>Add New To-do</h2>
            <form onSubmit={newTodo}>
                <label>
                    <input
                        type="text"
                        name="task"
                        placeholder="Enter a To-Do..."
                        onChange={handleChanges}
                        value={task.task}
                    />
                </label>

                <button>+ Add</button>
            </form>
        </div>
    );
}
