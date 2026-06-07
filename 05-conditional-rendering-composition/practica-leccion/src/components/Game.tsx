import { useState,useEffect } from "react";
import confetti from 'canvas-confetti';
import InputNumber from "./InputNumber";
import Message from "./Message";



function Game() {

  const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 

  const [numAleatorio] = useState(numeroAleatorio);
  const [numAdivinado, setnumAdivinado] = useState(0);

  const [message, setMessage] = useState("Que empiece el juego!");




  // Poner
  function handleAdivinar() {

    if (!Number.isInteger(numAdivinado) || numAdivinado < 1 || numAdivinado > 100) {
      setMessage("Ingrese un número entre 1 y 100");
      return;
    }


    if (numAdivinado === numAleatorio) {
      confetti();
      setMessage(`Ganaste :'D! el número era: ${numAleatorio}`);
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



  return (
    <>
        {numAleatorio}
        <InputNumber  setnumAdivinado={setnumAdivinado}/>
        <button onClick={handleAdivinar}>Adivinar</button>
        <Message msg={message}/>
    </>
  )
}

export default Game