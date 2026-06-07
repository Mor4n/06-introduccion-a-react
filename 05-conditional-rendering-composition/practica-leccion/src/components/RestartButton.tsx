
type Props = {

  iniciarJuego: ()=> void;

}

function RestartButton({iniciarJuego}:Props) {


  return (
    <button className="w-full bg-red-500  text-white cursor-pointer px-3 py-2 text-left hover:bg-red-600" onClick={()=>iniciarJuego()}>Reiniciar juego</button>
  )
}

export default RestartButton