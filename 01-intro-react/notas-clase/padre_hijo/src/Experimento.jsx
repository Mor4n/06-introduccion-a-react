
import React, { useState } from 'react'

let myVar = "";


function Experimento() {

    const [myState, setMyState] = useState("");


    function handleStateChange(e) {
        setMyState(e.target.value)
    }
    function handleVariableChange(e) {
        myVar = e.target.value
    }

  return (
    <>
        <label htmlFor="">Actualizar state</label>
        <input type="text" name="" id="" onChange={handleStateChange}/>
        <label htmlFor="">Actualizar var</label>
        <input type="text" name="" id="" onChange={(e)=>handleVariableChange(e)} />

        <h2>Valor de state: {myState}</h2>
        <h2>Valor de myVar: {myVar}  </h2>
    
    </>
  )
}

export default Experimento