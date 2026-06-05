import EstructurasCondicionales from "./components/EstructurasCondicionales"
import PropsChildren from "./components/PropsChildren"
import Template from "./components/Template"
import { useState } from "react"

function App() {

  const [ templateName, setTemplateName] = useState('casual')

  return (
  <>

    <EstructurasCondicionales/>
    <hr />
    {/* Propschildren no es una sola linea como EstructurasCondicionales */}
    <PropsChildren>
      {/* TODO LO QUE ESTÉ AQUI DENTRO, COMO EL p, SERÁ PARTE DE LAS PROPS CHILDREN */}
      <p>Este es el contenido de las props children</p>
    </PropsChildren>



    <select onChange={(e) => setTemplateName(e.target.value)}>
      <option value="profesional">Profesional</option>
      <option value="casual">Casual</option>
      <option value="default">Default</option>
    </select>

    <Template templateName={templateName}>
      {/* Esto de adentro (o sea, el article) será pasado en props como children */}
      <article>
        {/* Envuelvo este contenido aqui, pero dependiendo de como quiero tratar o manejar, puede ser recibido en la parte de cildren o en otro lado */}
        <h1>Este es el contenido del template</h1>
        <p>El template es un componente que recibe children y los renderiza dentro de un diseño específcio</p>
      </article>
    </Template>
  </>
  )
}

export default App
