import React, { useState } from 'react'

function NombreState(   ) {

    const [nombre, setNombre] = useState("");

    return (
    <>
        <input type="text" onChange={ (e)=> setNombre(e.target.value)
         } />
        <h1>Hola {nombre}</h1>
    </>
  )
}

export default NombreState