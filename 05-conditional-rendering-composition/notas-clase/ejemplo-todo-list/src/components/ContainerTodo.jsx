import React from 'react'
import { deleteTodo } from '../api/todos'
import Todo from './Todo'

function ContainerTodo({ todos }) {

    async function handleDelete(params) {
        await deleteTodo(id)
    }
    function handleUpdate(params) {

    }

    return (
        <div id="container_todo">
            {todos.map((todo) => {
                const id = todo["id"];
                const todoText = todo["Todo"];
                return <Todo key={id} {...{ id, todoText, handleDelete, handleUpdate }} />
            })}
        </div>)

}

export default ContainerTodo