import { useState,useEffect } from "react";
import confetti from 'canvas-confetti';
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from './RestartButton';



function Game() {

  
  const [numAleatorio,setNumAleatorio] = useState(0);
  const [numAdivinado, setnumAdivinado] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [message, setMessage] = useState("Que empiece el juego!");




  function handleAdivinar() {
    if (!Number.isInteger(numAdivinado) || numAdivinado < 1 || numAdivinado > 100) {
      setMessage("Ingrese un número entre 1 y 100");
      return;
    }
    const newIntentos = intentos + 1;

    setIntentos(newIntentos);

    if (numAdivinado === numAleatorio) {
      confetti();
      setMessage(`Ganaste :'D! el número era: ${numAleatorio} y lo lograste con ${newIntentos} intentos`);
      return;
    }

    const diferencia = Math.abs(numAdivinado - numAleatorio);

    if (diferencia <= 10) {
      setMessage(numAdivinado < numAleatorio
        ? "Estás cerca por debajo del número aleatorio 0_0"
        : "Estás cerca por encima del número aleatorio 0_0");
      return;
    }

    setMessage(numAdivinado < numAleatorio
      ? "Estás muy por debajo del número aleatorio u.u"
      : "Estás muy por encima del número aleatorio u.u");
  }

  function iniciarJuego() {
    
    setNumAleatorio(Math.floor(Math.random() * 100) + 1) 

    setMessage("Que empiece el juego!");

    setIntentos(0);

  }


    useEffect(() => {
      iniciarJuego();
      
    }, [])
    



  return (
    <>
        {numAleatorio}
        <InputNumber  setnumAdivinado={setnumAdivinado}/>
        <button onClick={handleAdivinar}>Adivinar</button>
        <Message msg={message}/>
        <h2>Intentos: {intentos}</h2>
        <RestartButton iniciarJuego={iniciarJuego}/>
    </>
  )
}

export default Game