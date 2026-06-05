import React, { useState } from 'react'

function OpSingleLine() {

  const [conditionalAnd, setConditionalAnd] = useState(false);
  const [conditionalOr, setConditionalOr] = useState(false);
  const [conditionalTernario, setConditionalTernario] = useState(false);

  return (
    <>
      
      <div>
        <h3>Condicional con AND && </h3>
        <label htmlFor="and">AND</label>
        <input type="checkbox" name='and' value={conditionalAnd} onChange={(e)=> setConditionalAnd(e.target.checked)}></input>

        {conditionalAnd && <h1>Mostrar conditionalAnd</h1>}
      </div>

      <div>
        <h3>Condicional con OR || </h3>
        <label htmlFor="or">OR</label>
        <input type="checkbox" name='or' value={conditionalOr} onChange={(e)=> setConditionalOr(e.target.checked)}></input>

        {conditionalOr || <h4>Mostrar conditionalOr</h4>}
        {<h4>Mostrar siempre</h4> || <h4>Mostrar nunca</h4>}
      </div>

      
      <div>
        <h3>Condicional con operador ternario ? : </h3>
        <label htmlFor="Ternario">Ternario</label>
        <input type="checkbox" name='Ternario' value={conditionalTernario} onChange={(e)=> setConditionalTernario(e.target.checked)}></input>

        {conditionalTernario  ?  <h4>Mostrar conditionalTernario</h4> : <h2>Mostrar else</h2>}
      </div>

    </>

    )
}

export default OpSingleLine