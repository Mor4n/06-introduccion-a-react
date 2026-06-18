import React from 'react'
import { NavLink } from 'react-router-dom'

function Item({image,name,description,id}) {
  return (

      <div>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>{description}</p>

    </div>

  )
}

export default Item