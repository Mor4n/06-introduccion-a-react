
import EjemploFragment from '../EjemploFragment'
import './App.css'
import Experimento from './Experimento'
import Hijo from './Hijo'
import Nombre from './Nombre'
import Nombre_props from './Nombre_props'
import NombreState from './NombreState'

function App() {
  return (

    <div>
        <Hijo/>
        <Nombre nombre={"Brayan"}/>
        {/* cada que le paso algo como  nombre={"Monan"} x="1" y="2" z="3" va a pasar como objeto en props */}
        <Nombre_props nombre={"Monan"} x="1" y="2" z="3"/>
        <NombreState />
        <EjemploFragment/>
        <hr />
        <Experimento/>
    </div>

  )
}

export default App
