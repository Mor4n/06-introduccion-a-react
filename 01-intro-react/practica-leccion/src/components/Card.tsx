


type CardTypeProps = {
    nombre: string
    profesion: string
    mensaje: string
    imagen: string

}

function Card( {nombre,profesion,mensaje,imagen}: CardTypeProps) {



  return (
    <div className=" w-2xs h-120 bg-[#FCFCFC] rounded-4xl ">

        <img src={imagen} alt="Imagen de perfil" className="rounded-4xl" />
        
        <div>
            <h2 className="font-black text-2xl">{nombre}</h2>
            <h4>Soy <span className="italic">{profesion}</span></h4>
            <p>{mensaje}</p>
    

        </div>

    </div>
  )
}

export default Card