import { useState } from "react";
import InputNumber from "./InputNumber";


function Game() {

  const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 

  const [numAleatorio] = useState(numeroAleatorio);

  const [numAdivinado, setnumAdivinado] = useState(0);



  return (
    <>
        <InputNumber  setnumAdivinado={setnumAdivinado}/>
        {numAdivinado}
    </>
  )
}

export default Game