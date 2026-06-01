
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';


function App() {

  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState('En órbita');
  const [planetasVisitados, setPlanetasVisitados] = useState<string[]>([]);




  // En strictmode useEffect se ejecuta 2 veces para detectar efectos secundarios
  useEffect(() => {
    
    //Montaje
    console.log('¡El panel de control está listo!');
    // Lo guardo en variable para luego limpiarlo
    const intervalo = setInterval( ()=>{ 
      setDistancia((prevState) => prevState + 1);
      setCombustible((prevState) => (prevState > 0 ? prevState - 1 : 0));
    
    }, 1000);
        

  
    //! Desmontaje
    return () =>{ 
      // lo limpio para que no sume de 2 en dos, porque sino, se quedaran 2 intervalos activos
      clearInterval(intervalo);
      console.log('El panel de control se ha apagado.'); 
    }; 

  }, []);
  
  // Actualización
  useEffect(() => {
    console.log('¡Combustible actualizado!'); 
  }, [combustible]);



  const mensajeEstado = useMemo(() => { 
    return `Estado de la nave: ${estadoNave}`;
  
  }, [estadoNave]);

  
  const handleAterrizar = () => {
    setEstadoNave('Aterrizando');
    const nuevoPlaneta = `Planeta ${planetasVisitados.length + 1}`;

    setPlanetasVisitados((prevState) => [...prevState, nuevoPlaneta]);

  };

  return (
    <>
      <h1>Panel de control</h1>
      <p>Distancia: {distancia}</p>
      <p>Combustible: {combustible}</p>
      <p>{mensajeEstado}</p>

      <button onClick={handleAterrizar}>Aterrizar</button>

      <h2>Planetas visitados</h2>
      {planetasVisitados.length === 0 ? (
        <p>Aun no hay planetas visitados.</p>
      ) : (
        planetasVisitados.map((nombre) => <Planeta key={nombre} nombre={nombre} />)
      )}
    </>
  );
}

export default App
