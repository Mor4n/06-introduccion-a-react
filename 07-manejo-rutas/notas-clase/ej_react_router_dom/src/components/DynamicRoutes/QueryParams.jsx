import {React, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'

function QueryParams() {

    // SearchParams y QueryParams es lo mismo
    const [queryParams, setQueryParams] = useSearchParams();
    

    // con el setQueryParams podemos ponerlos por nuestra cuenta

   
    

  return (

    <div>
        <h1>Hola { queryParams.get("name") }</h1>
        <h1>Hola { queryParams.get("name2") }</h1>

    </div>


  )
}

export default QueryParams