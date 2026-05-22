
function Hijo({handleObtenerPokemones, pokemones}) {


    

  return (

        <div>
        {JSON.stringify(pokemones)}
        <button type="button" onClick={handleObtenerPokemones}> Obtener pokemones</button>

        </div>
)
}

export default Hijo