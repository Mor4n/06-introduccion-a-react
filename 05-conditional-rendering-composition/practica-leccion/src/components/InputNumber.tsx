import React from 'react'

type Props = {
  setnumAdivinado: React.Dispatch<React.SetStateAction<number>>;
}


function InputNumber({setnumAdivinado}:Props) {


  return (

    
    <>
    <div className="grid gap-1">
      <label className="text-sm" htmlFor="numeroAdivinar">Ingrese el número</label>
      <input className="w-full border-0 bg-white px-3 py-2" placeholder='Ingreselo aquí' type="number" name="numeroAdivinar" id="numeroAdivinar" min="1" max="100" onChange={(e)=>{setnumAdivinado(Number(e.target.value))}} />
    </div>
    </>

  )
}

export default InputNumber