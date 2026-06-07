import React, { useState } from 'react'

type Props = {
  setnumAdivinado: React.Dispatch<React.SetStateAction<number>>;
}


function InputNumber({setnumAdivinado}:Props) {


  return (

    
    <>
      <label htmlFor="numeroAdivinar">Ingrese el un número a adivinar</label>
      <input type="number" name="numeroAdivinar" id="numeroAdivinar" min="1" max="100" onChange={(e)=>{setnumAdivinado(Number(e.target.value))}} />
    </>

  )
}

export default InputNumber