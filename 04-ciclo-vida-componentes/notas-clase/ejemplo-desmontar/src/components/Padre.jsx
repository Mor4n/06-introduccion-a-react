import React, { useState } from 'react'
import "./Padre.css"
import Hijo from './Hijo';

function Padre() {

    const [montar,setMontar]=useState();
    const [texto,setTexto]=useState();

    function handleMontar(){
        setMontar(true)
    }
    function handleDesmontar(){
        setMontar(false)
    }
    function handleActualizar() {
        
        texto === "padre" ? setTexto("otro texto") : setTexto("padre")
    }

  return (
    <>
    <div id="padre"><h2>Padre</h2></div>

        <button onClick={handleMontar}>Montar</button>
        <button onClick={handleActualizar}>Actualizar</button>
        <button onClick={handleDesmontar}>Desmontar</button>
        <hr/>
        {montar && <Hijo {...{texto}}/>}
    
    </>

  )
}

export default Padre