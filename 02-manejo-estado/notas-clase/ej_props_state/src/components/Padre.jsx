import { useState } from "react"
import Cantidad from "./Cantidad"
import Hijo from "./Hijo"

function Padre() {
    const [cantidad,setCantidad] = useState(1)

    const [pokemones, setPokemones] = useState(null)

    let URL= `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`

    
    async function handleObtenerPokemones () {
        const json_result = await fetch(URL)
        setPokemones(await json_result.json())

    }

    function handleUpdateCantidad(e) {
        setCantidad(e.target.value)
    }

    


  return (
    <>
    {/* Pasar props a hijo repitiendo el nombre */}
    <Cantidad  handleUpdateCantidad={handleUpdateCantidad}/>
    {/* O pasar props al hijo sin repetir el nombre con "..." pasa todas las propiedades y además esta función que se llama handleObtenerPokemones */}
    {/* <Hijo {...pokemones, handleObtenerPokemones} />  */}
    <Hijo {...{pokemones, handleObtenerPokemones}} />
      
    </>
  )
}

export default Padre