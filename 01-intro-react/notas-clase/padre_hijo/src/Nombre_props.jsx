
// los props son propiedades del componente que se pasan como son un objeto
function Nombre_props(props) {
  return (
    <>
        <h1>Hola {props.nombre}</h1>
        <p>{JSON.stringify(props)}</p>

    </>
  )
}

export default Nombre_props