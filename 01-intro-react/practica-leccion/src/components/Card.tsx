
type CardTypeProps = {
    nombre: string
    profesion: string
    mensaje: string

}

function Card( {nombre,profesion,mensaje}: CardTypeProps) {



  return (
    <div className="border border-amber-700 border-dotted p-10 w-2xl text-center ">
        <h2 className="">Mi nombre es: <span className="font-black">{nombre}</span></h2>
        <h4>Soy <span>{profesion}</span></h4>
        <p>{mensaje}</p>
    </div>
  )
}

export default Card