import CEj_useCallback from "./components/contraEjemplos/CEj_useCallback"
import CEJ_useReduce from "./components/contraEjemplos/CEJ_useReduce"
import Ej_useCallback from "./components/Ejemplos/Ej_useCallback"
import Ej_useReduce from "./components/Ejemplos/Ej_useReduce"
import Ej_useRef from "./components/Ejemplos/Ej_useRef"


function App() {

  return (
   <>
   
   {/* <Ej_useRef/> */}


    <hr/>
    <h3>UseCallback Contraejemplo</h3>

   {/* <CEj_useCallback pokemonId={1}/> */}
    <h3>UseCallback ejemplo</h3>
    {/* Usecallback -> podemos poner una funcion dentro de hooks, como callbacks dentro de funciones */}
   {/* <Ej_useCallback pokemonCount={1}/>  */}

    <hr/>
    <h3>useReduce Contraejemplo</h3>
    {/* <CEJ_useReduce/> */}


    <hr/>
    <h3>useReduce Ejemplo</h3>

    {/* <Ej_useReduce/> */}

   </>
  )
}

export default App
