import { useState } from "react";
import Card from "./components/Card";
import pfp from "./assets/pfp.png"

function App() {


  return (
    <div className="flex justify-center">

      <Card
        nombre={"Reyna"}
        mensaje={"Holaaa 🐱!"}
        imagen={pfp}
        

      />

    </div>
  )
}

export default App
