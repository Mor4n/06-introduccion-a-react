import { useState, useMemo, useEffect } from "react"
import type { TareasType } from "./types";

type FiltroTareas = "todas" | "cortas" | "medias" | "largas";



function App() {

  
  const [tareas, setTareas] = useState<TareasType[]>(() => {
    const tareasGuardadas = localStorage.getItem("tareas");

    return tareasGuardadas
      ? JSON.parse(tareasGuardadas)
      : [];
  });
  const [nuevaTarea,setNuevaTarea] = useState("");
  const [duracion, setDuracion] = useState('');
  const [filtro, setFiltro] = useState<FiltroTareas>("todas");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);


  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  const tareasFiltradas = useMemo(() => {
    return tareas.filter((tarea) => {
      switch (filtro) {
        case "cortas":
          return tarea.duracion <= 30;
        case "medias":
          return tarea.duracion > 30 && tarea.duracion <= 60;
        case "largas":
          return tarea.duracion > 60;
        default:
          return true;
      }
    });
  }, [tareas, filtro]);

   useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [tareas]);  // Se ejecuta cada vez que las tareas cambian

   const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (

    <div className="min-h-screen bg-slate-600 flex items-center justify-center p-8">
      <div className="w-full max-w-xl bg-white rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-black text-center mb-8">
          Contador de Tareas
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nombre de la tarea"
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 "
          />

          <input
            type="number"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            placeholder="Duración"
            className="w-full md:w-40 px-4 py-3 rounded-xl border border-slate-300"
          />

          <button
            onClick={agregarTarea}
            className="bg-green-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-xl "
          >
            Agregar
          </button>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3 ">
          <label htmlFor="filtro-tareas" className="text-sm font-semibold text-slate-600">
            Filtrar tareas:
          </label>

          <select
            id="filtro-tareas"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value as FiltroTareas)}
            className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-300 bg-white"
          >
            <option value="todas">Todas</option>
            <option value="cortas">Cortas (30 min o menos)</option>
            <option value="medias">Medias (31 - 60 min)</option>
            <option value="largas">Largas (60 min o más)</option>
          </select>
        </div>

       <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">
            Tareas
          </h2>

          {tareasFiltradas.length === 0 ? (
            <p className="text-slate-500 text-center">
              No hay tareas coincidentes con este filtro
            </p>
          ) : (
            <ul className="space-y-3">
              {tareasFiltradas.map((tarea, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200"
                >
                  <span className="font-medium text-slate-700">
                    {tarea.nombre}
                  </span>

                  <span className="text-sm font-semibold">
                    {tarea.duracion} min
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>


      <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-slate-800">
            Total de tiempo:{" "}
            <span className="text-blue-600">{calcularTiempoTotal} minutos</span>
          </h3>
        </div>
    </div>
    </div>
  )
}

export default App
