import { useState,useMemo,useEffect } from "react"
import type { TareasType } from "./types";


function App() {

  
  const [tareas, setTareas] = useState<TareasType[]>([]);
  const [nuevaTarea,setNuevaTarea] = useState("");
  const [duracion, setDuracion] = useState('');

 

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

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
            className="bg-blue-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-xl "
          >
            Agregar
          </button>
        </div>

      <h2>Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
    </div>
  )
}

export default App
