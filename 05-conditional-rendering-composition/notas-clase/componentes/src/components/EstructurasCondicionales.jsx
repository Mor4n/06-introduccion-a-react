import React, { useState } from 'react'

import ConditionalIf from './EstructurasCondicionales/ConditionalIf'
import OpSingleLine from './EstructurasCondicionales/OpSingleLine'
import Switch from './EstructurasCondicionales/Switch'

function EstructurasCondicionales() {

  const [valor,setValor] = useState(true);
  const [color, setColor] = useState('');

  function handleValorChange(e) {
      setValor(e.target.checked)
  }

  return (
    <>

      <div>
        <h2>If condicional</h2>
        <ConditionalIf conditional = {valor}/>
        <label htmlFor="inputCheck">Valor</label>
        <input type="checkbox" name="inputCheck" onChange={  handleValorChange } />

      </div>
      <hr />
      <h2>Operator single line</h2>
      <OpSingleLine/>
      
      
      <hr />

      <div>
        <h2>Switch</h2>
        
        <select name="selectColor" onChange={(e) => setColor(e.target.value)}>
          <option value="">Selecciona un color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <Switch color={color}/>

      </div>
    </>
  )
}

export default EstructurasCondicionales