import React from 'react'
import { useParams } from 'react-router-dom'

function UrlParams() {
    // Se puede hacer asi
    // const params = useParams(); usando params.name
    // o destructurando
    const { name,name2 } = useParams();

  return (
    <>
        <h1>Hola {name}! y {name2} </h1>

    
    </>
  )
}

export default UrlParams