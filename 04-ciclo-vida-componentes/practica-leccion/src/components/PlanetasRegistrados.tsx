import type { PlanetaRegistrado } from '../types'

type PlanetaRegistradosProps = {
    planetasRegistrados: PlanetaRegistrado[];
    setPlanetaSeleccionado: (planeta: PlanetaRegistrado) => void;
    onEditar: (planeta: PlanetaRegistrado) => void;
    onEliminar: (id: string) => void;
}

function PlanetasRegistrados({planetasRegistrados, setPlanetaSeleccionado, onEditar, onEliminar}:PlanetaRegistradosProps) {
  return (
    <ul>
      {planetasRegistrados.map((planeta) => (
        <li key={planeta.id} style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
          <button type="button" onClick={() => setPlanetaSeleccionado(planeta)}>
            {planeta.nombre}
          </button>
          <button type="button" onClick={() => onEditar(planeta)} aria-label={`Editar ${planeta.nombre}`}>
            Editar
          </button>
          <button type="button" onClick={() => onEliminar(planeta.id)} aria-label={`Eliminar ${planeta.nombre}`}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default PlanetasRegistrados