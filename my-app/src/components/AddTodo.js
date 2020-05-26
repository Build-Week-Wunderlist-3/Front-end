// dependency imports
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import axios from 'axios';



const initialTodo = {
    todo: '',

}


export default function AddTodo(props) {

    const { push } = useHistory()



    const [todo, setTodo] = useState(initialTodo)
    //const [formDisabled, setFormDisabled] = useState(true)

    const handleChanges = e => {


        const value = e.target.value;

        setTodo({
            ...todo,
            [e.target.name]: value
        });

    };


    const newTodo = e => {
        e.preventDefault();

        axios
            .post('/api/todo', todo)
            .then(res => {

                console.log(res)
                setTodo(todo.todo)


            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            <h2>Add New To-do</h2>
            <form onSubmit={newTodo}>


                <label>
                    {/* Add new Task here: &nbsp; */}

                    <input
                        type="text"
                        name='todo'
                        placeholder='Enter a To-Do...'
                        onChange={handleChanges}
                        value={todo.todo}
                    />
                </label>

                <button>+ Add</button>
            </form>

        </div>
    )

}