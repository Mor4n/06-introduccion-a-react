import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react"


function App() {

  const [num,setNum] = useState(5);
  const [resultUE, setResultUE] = useState(0);

  let resultUM = null


  // useMemo tiene un callback y arreglo de dependencias
  resultUM = useMemo(() => {
      // return `El resultado de useMemo`
    const result = num*10;

      console.log(`Se ejecutó usememo con el resultado ${result}`);


        // useMemo debe tener un return
      return result;

    }, [num,resultUM]

  )

  // Contraparte con useEffect
  useEffect( ()=>{
    const result = num*10;
    setResultUE(result)
    console.log(`Se ejecutó useEffect con el resultado ${result}`);
    

  },[num,resultUE])

  const handleInput = (e) =>{
      setNum(e.target.value)
  }

  return (
    <>
        <input type="text" onChange={ handleInput} />
      <h1>Resultado con useMemo: {resultUM}</h1>
      <h1>Resultado con useEffect: {resultUE}</h1>

    </>
  )
}

export default App
