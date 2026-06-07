import React, { useEffect, useReducer, useState, useCallback } from 'react'


// los valores del useReducer van afuera
const initialState = {
    loading: false,
    error:null,
    data:null

}

function reducer(state,action) {
    // esto controla toda la logica complicada en una sola parte y solo se va a estar llamando una vez.
    // el resultado de esto va a estar en un solo state
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading:true, error:null}
            break;
        case "FETCH_SUCCESS":
            return { ...state, loading:false, data: action.payload}
            break;
            
        case "FETCH_ERROR":
            return { ...state, loading:false, error: action.error}
            break;
    
        default:
            return state
            break;
    }
}

// useReducer es como un state grandote
function Ej_useReduce() {
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [data,setData] = useState(null);
    // En vez de usar todos esos states hago:

    // state son los 3 estados de arriba, dispatch el que lo trigerea
    // a la derecha tenemos una funcion llamada reducer y el valor inicial, que es un estado en este caso
    const [ state, dispatch ] = useReducer(reducer, initialState)


    useEffect(()=>{
    
    async function fetchData(params) {

        dispatch( {type:"FETCH_START"})
        try {
            const response = await fetch(`https://httpbin.org/status/200`);
            
            dispatch({type:"FETCH_SUCCESS", payload:await response.json()})

        } catch (error) {
            dispatch({type:"FETCH_ERROR", payload:error})


        }
    }

        fetchData()
    },[state])


    useEffect( ()=>{
        fetchData(),[fetchData]
    })

  return (
    <div className='cajita'>
        <h2>Contraejemplo de reducer</h2>
        <p>{JSON.stringify(state)}</p>
        <p>Loading: {state.loading?"Cargando":"Cargado"}</p>
        <p>Error:{ state.error}</p>

    </div>
  )
}

export default Ej_useReduce