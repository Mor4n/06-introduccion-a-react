import React from 'react'
import Todo from './Todo'

function ContainerTodo({ children }) {

    

    return (
        <div id="container_todo">
            {
            children.length > 0 ? children : <h1>No hay todos por mostrar</h1>}
            
        </div>)

}

export default ContainerTodo