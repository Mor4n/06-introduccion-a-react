import type { PlanetaRegistrado } from '../types'

type PlanetaRegistradosProps = {
    planetasRegistrados: PlanetaRegistrado[];
    setPlanetaSeleccionado: (planeta: PlanetaRegistrado) => void;
    onEditar: (planeta: PlanetaRegistrado) => void;
    onEliminar: (id: string) => void;
}

function PlanetasRegistrados({planetasRegistrados, setPlanetaSeleccionado, onEditar, onEliminar}:PlanetaRegistradosProps) {
  return (
    <ul className="space-y-2">
      {planetasRegistrados.map((planeta) => (
        <li key={planeta.id} className="flex flex-wrap items-center gap-2 px-3 py-2">
          <button type="button" onClick={() => setPlanetaSeleccionado(planeta)} className="font-medium text-slate-900 cursor-pointer hover:underline">
            {planeta.nombre}
          </button>
          <div className="ml-auto flex gap-2">
            <button type="button" onClick={() => onEditar(planeta)} aria-label={`Editar ${planeta.nombre}`} className="rounded-full border border-slate-300 px-2 py-1 text-sm cursor-pointer text-slate-700">
              Editar
            </button>
            <button type="button" onClick={() => onEliminar(planeta.id)} aria-label={`Eliminar ${planeta.nombre}`} className="rounded-full border border-slate-300 px-2 py-1 text-sm cursor-pointer text-slate-700">
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PlanetasRegistrados