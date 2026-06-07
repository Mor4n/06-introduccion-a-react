import React, { useState } from 'react'

type Props = {
  setnumAdivinado: React.Dispatch<React.SetStateAction<number>>;
}


function InputNumber({setnumAdivinado}:Props) {


  const [inputNumAdivinar, setinputNumAdivinar] = useState(0);

  function handleEnviarNumero() {
    
    setnumAdivinado(inputNumAdivinar);

  }


  return (

    
    <>
      <label htmlFor="numeroAdivinar">Ingrese el un número a adivinar</label>
      <input type="number" name="numeroAdivinar" id="numeroAdivinar" onChange={(e)=>{setinputNumAdivinar(Number(e.target.value))}} />
      <button onClick={handleEnviarNumero}>Adivinar</button>
    </>

  )
}

export default InputNumber