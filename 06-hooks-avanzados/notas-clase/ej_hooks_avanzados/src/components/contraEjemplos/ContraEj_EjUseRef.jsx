import React, { useState } from 'react'

function ContraEj_EjUseRef() {
    const [intervalId, setIntervalId] = useState(null);
    const [counter, setCounter] = useState(0);

    function handleEmpezarButton() {

        const id = setInterval( ()=>
            console.log("Hola")
            
            
        ,1000); // El setInterval por defecto devuelve un id con el que se puede quitar
        
        setIntervalId(id);
    }

    function handlePararButton(params) {
        clearInterval(intervalId)
    }


    return (
        <div>
            <button onClick={handleEmpezarButton}>Empezar intervalo</button>
            <button onClick={handlePararButton}>Parar intervalo</button>

            <p>{ counter}</p>

            <h2>Id del intervalo: {intervalId}</h2>
        </div>
    )
}

export default ContraEj_EjUseRef