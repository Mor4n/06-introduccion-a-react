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
  const [won, setWon] = useState(false);




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
      setWon(true);
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
    setWon(false);
  }


    useEffect(() => {
      iniciarJuego();
      
    }, [])
    



  return (
    <>  
    <main className="min-h-screen bg-neutral-100 px-4 py-8 text-neutral-900">
      <div className="mx-auto grid w-full max-w-sm gap-3 mt-25">
        {!won && <InputNumber setnumAdivinado={setnumAdivinado} />}

        {!won && (
          <button className="w-full bg-blue-500 text-white px-3 py-2 text-left cursor-pointer hover:bg-blue-600" onClick={handleAdivinar}>
            Adivinar
          </button>
        )}

        {(message !== "Que empiece el juego!" || won) && <Message msg={message} />}

        <h2 className="text-base font-normal">Intentos: {intentos}</h2>

        {won && <RestartButton iniciarJuego={iniciarJuego} />}
      </div>
    </main>
    </>
  )
}

export default Game