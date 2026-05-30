import React, { useEffect } from 'react'

function Hijo({count,handleClick}) {

    useEffect(
        ()=>{

            console.log("Se ha montado el componente o se ha actualizado");
            
            return ()=>{
                console.log("Se ha desmontado el componente");
                
            }
           

        }
        ,[count])

  return (
    <div>
        <h1>Hijo renderizado</h1>
        <h2>Counter: {count}</h2>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Hijo