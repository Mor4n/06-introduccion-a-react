import { useEffect, useState } from "react"


function App() {
// useEffect tiene 2 partes: callback y dependencias
  // useEffect( () => {}  , []);
  const [name, setName] = useState("Primero");
  const [count,setCount] = useState(0);

  useEffect( () => {

    console.log("Se ejecutó el efecto!")

  }  , [name,count]);


  const handleClick = () =>{
    setCount(count+1);
    setName("Alex");
  }


  return (
    <>
      <h1>Hola {name}!</h1>
      <h1> {count} clics</h1>
      <button onClick={handleClick}>Cambiar nombre</button>

    </>
  )
}

export default App
