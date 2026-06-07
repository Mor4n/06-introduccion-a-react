import React, { useEffect, useState } from 'react'

function CEj_useCallback( { pokemonId }) {

    const [data,setData] = useState(null);
    
    useEffect(() => {

     async function fetchData(params) {

         const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0}`);
        console.log(response);
        
                setData( await response.json())


      }

    //   fetchData() // va comentado porque causa loop infinito
    
    })
    

  return (

    <>
    <p>{JSON.stringify(data)}</p>
    </>

  )
}

export default CEj_useCallback