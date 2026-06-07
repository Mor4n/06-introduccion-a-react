import React, { useRef, useState } from 'react'

function Ej_useRef() {
    
      const intervalId = useRef(null);
    const [counter, setCounter] = useState(0);

    function handleEmpezarButton() {

        const id = setInterval( ()=>
            console.log("Hola")
            
        ,1000); 
        intervalId.current = id;
    }

    function handlePararButton() {
        clearInterval(intervalId.current) // current obtiene el valor de useRef
    }

     function handleCambiarTextoButton() {
        clearInterval(intervalId.current) // current obtiene el valor de useRef
    }


  return (
    <div>
            <button onClick={handleEmpezarButton}>Empezar intervalo</button>
            <button onClick={handlePararButton}>Parar intervalo</button>

            <p>{ counter.current}</p>

            <h2>Id del intervalo: {intervalId.current}</h2>
        </div>
  )
}

export default Ej_useRef