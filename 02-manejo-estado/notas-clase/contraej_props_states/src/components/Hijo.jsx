import { useState } from "react"

function Hijo() {


    const [pokemones, setPokemones] = useState(null)

    const URL= "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"

    async function handleObtenerPokemones () {
        const json_result = await fetch(URL)
        setPokemones(await json_result.json())

    }

  return (

        <div>
        {JSON.stringify(pokemones)}
        <button type="button" onClick={handleObtenerPokemones}> Obtener pokemones</button>

        </div>
)
}

export default Hijo