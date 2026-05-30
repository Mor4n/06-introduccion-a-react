
import React, { useState, useEffect, useMemo } from 'react';


function App() {

  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En orbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);




  // En strictmode useEffect se ejecuta 2 veces para detectar efectos secundarios
  useEffect(() => {
    
    //Montaje
    console.log("El panel está listo!");
    // Lo guardo en variable para luego limpiarlo
    const intervalo = setInterval( ()=>{ 
      setDistancia((prevState)=> prevState+1)
      setCombustible((prevState)=> prevState-1)
    
    },1000)
        

  
    //! Desmontaje
    return () =>{ 
      // lo limpio para que no sume de 2 en dos, porque sino, se quedaran 2 intervalos activos
      clearInterval(intervalo);
      console.log("El panel se ha apagado."); 
    } 

  }, []);
  
  // Actualización
  useEffect(() => {
    console.log("¡Combustible actualizado!"); 
  }, [combustible]);



  const mensajeEstado = useMemo(() =>{ 
    return `Estado actual: ${estadoNave}`
  
  }, [estadoNave]);

  

  return (
   <>
   <p>{distancia}</p>
   <p>{combustible}</p>
   </>
  )
}

export default App
