import React, { useEffect, useState } from 'react'

function CEJ_useReduce() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data,setData] = useState(null);



    useEffect(
       ()=>{
         async function fetchData(params) {
            setIsLoading(true)
            setError(null)

        try {
            const response = await fetch(`https://httpbin.org/status/200`);
        //    setData(await response.json()) // Comentaod porque causa loop infinito

        } catch (error) {
            setError(error.message);

        }
    }

        fetchData()
    })

  return (
    <div className='cajita'>
        <h2>Contraejemplo de reducer</h2>
        <p>{JSON.stringify(data)}</p>
        <p>Loading: {isLoading?"Cargando":"Cargado"}</p>
        <p>Error:{ error}</p>

    </div>
  )
}

export default CEJ_useReduce