import React from 'react'

type Props = {

  generarNumAleatorio: ()=> void;

}

function RestartButton({generarNumAleatorio}:Props) {


  return (
    <button className="cursor-pointer"onClick={()=>generarNumAleatorio()}>Reiniciar juego</button>
  )
}

export default RestartButton