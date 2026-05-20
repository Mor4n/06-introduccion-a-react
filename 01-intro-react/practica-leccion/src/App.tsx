import { useState } from "react";
import Card from "./components/Card";
import pfp from "./assets/pfp.jpg"

function App() {


  return (
    <div className="bg-[#F5F5F5]">

      <Card
        nombre={"Brayan"}
        profesion={"Estudiante"}
        mensaje={"Holaaa 🐱!"}
        imagen={pfp}
        

      />

    </div>
  )
}

export default App
