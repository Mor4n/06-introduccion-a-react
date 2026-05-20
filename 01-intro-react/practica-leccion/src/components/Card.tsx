import check from "../assets/check.png"
import followers from "../assets/followers.png"
import Stats from "./Stats"


type CardTypeProps = {
    nombre: string
    mensaje: string
    imagen: string

}

function Card( {nombre,mensaje,imagen}: CardTypeProps) {



  return (
    <div className=" w-2xs h-120 bg-[#FCFCFC] mt-20 rounded-4xl flex flex-col items-center shadow-2xl">

        <div className="p-2">
          <img src={imagen} alt="Imagen de perfil" className=" rounded-4xl w-66 h-70 border-2 border-[#bdc6c5] shadow-md" />
        </div>

        <div className="flex flex-col self-start ml-10 mt-3">
            <h2 className="text-2xl font-medium ">{nombre}</h2>
            <h3 className="text-[#757575] text-[20px] mt-2">{mensaje}</h3>

        </div>

        <div className="flex w-full items-center mt-9 justify-around">

            <div className="flex gap-3">
              <Stats icon={followers} count={2} />
              <Stats icon={check} count={2} />
            </div>

            <button className="bg-linear-to-b from-white to-gray-100  py-2 px-5 rounded-4xl border border-[#bdc6c5] cursor-pointer  font-medium ">
          Seguir +
        </button>

        </div>

    </div>
  )
}

export default Card