import React, { useCallback, useEffect, useState } from 'react'

function Ej_useCallback( { pokemonCount }) {

    const [data,setData] = useState(null);
    // Lo hace una sola vez y solo lo vuelve a hacer en caso de que el prop cambie
    const fetchData = useCallback( async () =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0}`);
        
        
        setData( await response.json())
        
    },[pokemonCount]);
    
    useEffect(() => {

        fetchData() 
    
    },[fetchData])
    


  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default Ej_useCallback