import React from 'react'
import { useLocation } from 'react-router-dom'

function HashParams() {
    // nota: puede ser asi o destructurado
    // const hashParams = useLocation().hash
    const  haspParams  = useLocation().hash

  return (
    // con substring 1 es de adelante del #
    <div>Hola {haspParams.substring(1)}!</div> 
  )
}

export default HashParams