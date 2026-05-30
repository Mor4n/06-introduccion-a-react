import {  useState } from "react"
import HijoCount from "./components/HijoCount"
import Padre from "./components/Padre"

function App() {

  const [renderizado,setRenderizar] = useState(false)

  const [count, setCount] = useState(0)

  const handleRenderiza = () =>{
      setRenderizar(!renderizado)
  }

  const handleClick = () =>{
    setCount(count+1);

  }

  return (
    <>
    {/* Con ampersand podemos evaluar 
      'true' && "<h1>Renderizado!</h1>"
      'false' && "<h1>Renderizado!</h1>"
    */}
    {/* Con esto podemos montar y desmontar elementos */}
      {renderizado && <HijoCount {...{count,handleClick}}/>}
      <button onClick={handleRenderiza}>Renderiza</button>
      <Padre />
    </>
  )
}

export default App
