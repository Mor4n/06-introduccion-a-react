import React, { useState } from 'react'

function Todo({id, todoText, handleDelete, handleUpdate, setTodoText }) {

  const[editing,setEditing] = useState(false);
      const[todoTextValue, setTodoTextValue] = useState(todoText);
  

  function handleEdit(){
    setEditing(true)

  }
  function handleEditDone() {
    handleUpdate(id,todoText)
    setEditing(false)
  }

  function handleEditOnChange(e) {
    setTodoText(e.target.value)
  }

  return (
    <div className="todo" >
      <p>{todoText}</p>
      <span>
        {editing ? <>
      <input value={todoText}/> <button onClick={handleEditDone}>Actualizar</button>
      </> : todoText}</span>
      <button onClick={() => handleEdit(id)}>🖊</button>
      <button onClick={() => {handleDelete(id)}}>🗑</button>
    </div>
  )
}

export default Todo