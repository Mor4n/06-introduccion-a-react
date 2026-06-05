import React from 'react'

function Todo({id, todoText, handleDelete, handleUpdate}) {
  return (
    <div className="todo" >
      <p>{todoText}</p>
      <button onClick={() => handleUpdate(id)}>🖊</button>
      <button onClick={() => handleDelete(id)}>🗑</button>
    </div>
  )
}

export default Todo