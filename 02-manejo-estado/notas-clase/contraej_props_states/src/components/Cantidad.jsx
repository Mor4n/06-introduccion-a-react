import { useState } from "react"

function Cantidad() {
    const [cantidad,setCantidad] = useState(1)

    function handleCambiarCantidad(e) {
        setCantidad(e.target.value)
    }
    function handleUpdateCantidad() {
        
    }

  return (
    <>
        <input onChange={handleUpdateCantidad}/>
        <button onClick={handleCambiarCantidad}>Cambiar cantidad</button>
    </>
)
}

export default Cantidad