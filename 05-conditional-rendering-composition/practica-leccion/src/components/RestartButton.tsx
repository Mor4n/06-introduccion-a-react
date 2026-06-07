import React from 'react'

type Props = {

  iniciarJuego: ()=> void;

}

function RestartButton({iniciarJuego}:Props) {


  return (
    <button className="cursor-pointer"onClick={()=>iniciarJuego()}>Reiniciar juego</button>
  )
}

export default RestartButton