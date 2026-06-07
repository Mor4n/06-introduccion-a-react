
import { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';
import Formulario from './components/Formulario';
import type { PlanetaRegistrado } from './types';
import PlanetasRegistrados from './components/PlanetasRegistrados';


const obtenerPlanetasGuardados = (): PlanetaRegistrado[] => {

  const planetasGuardados = localStorage.getItem('planetas-registrados');

  if (!planetasGuardados) {
    return [];
  }

  try {
    return JSON.parse(planetasGuardados) as PlanetaRegistrado[];
  } catch {
    return [];
  }
};




function App() {

  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState('En órbita');
  const [planetasVisitados, setPlanetasVisitados] = useState<string[]>([]);
  const [planetasRegistrados, setPlanetasRegistrados] = useState<PlanetaRegistrado[]>(obtenerPlanetasGuardados);
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState<PlanetaRegistrado | null>(null);




  // En strictmode useEffect se ejecuta 2 veces para detectar efectos secundarios
  useEffect(() => {
    
    //Montaje
    console.log('¡El panel de control está listo!');
    // Lo guardo en variable para luego limpiarlo
    const intervalo = setInterval( ()=>{ 
      setDistancia((prevState) => prevState + 1);
      setCombustible((prevState) => (prevState > 0 ? prevState - 1 : 0));
    
    }, 1000);
        

  
    //! Desmontaje
    return () =>{ 
      // lo limpio para que no sume de 2 en dos, porque sino, se quedaran 2 intervalos activos
      clearInterval(intervalo);
      console.log('El panel de control se ha apagado.'); 
    }; 

  }, []);
  
  // Actualización
  useEffect(() => {
    console.log('¡Combustible actualizado!'); 
  }, [combustible]);



  const mensajeEstado = useMemo(() => { 
    return `Estado de la nave: ${estadoNave}`;
  
  }, [estadoNave]);

  
  const handleAterrizar = () => {
    setEstadoNave('Aterrizando');
    const nuevoPlaneta = `Planeta ${planetasVisitados.length + 1}`;

    setPlanetasVisitados((prevState) => [...prevState, nuevoPlaneta]);

  };

  // omit quiero todo excepto el id
  const handleAgregarPlaneta = (nuevoPlaneta: Omit<PlanetaRegistrado, 'id'>) => {
    const planetaCreado = {
      id: crypto.randomUUID(),
      ...nuevoPlaneta,
    };

    setPlanetasRegistrados((prevState) => [
      ...prevState,
      planetaCreado,
    ]);

    setPlanetaSeleccionado(planetaCreado);
  };

  const handleEditarPlaneta = (planeta: PlanetaRegistrado) => {
    const nuevoNombre = window.prompt('Nuevo nombre del planeta', planeta.nombre);
    if (nuevoNombre === null) return; // usuario canceló
    const nuevaDescripcion = window.prompt('Nueva descripción', planeta.descripcion);
    if (nuevaDescripcion === null) return;

    const actualizado: PlanetaRegistrado = {
      ...planeta,
      nombre: nuevoNombre.trim() || planeta.nombre,
      descripcion: nuevaDescripcion.trim() || planeta.descripcion,
    };

    setPlanetasRegistrados((prevState) => prevState.map((p) => (p.id === planeta.id ? actualizado : p)));
    setPlanetaSeleccionado(actualizado);
  };

  const handleEliminarPlaneta = (id: string) => {
    const confirmar = window.confirm('¿Estás seguro que quieres eliminar este planeta de la bitácora?');
    if (!confirmar) return;

    setPlanetasRegistrados((prevState) => prevState.filter((p) => p.id !== id));
    setPlanetaSeleccionado((prev) => (prev && prev.id === id ? null : prev));
  };

  useEffect(() => {
    localStorage.setItem('planetas-registrados', JSON.stringify(planetasRegistrados));
  }, [planetasRegistrados]);

  return (
    <main className="min-h-screen px-4 py-8 text-slate-900">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 bg-white p-6">
        

        <section className="grid gap-3 sm:grid-cols-3">
          <div className="p-4">
            <p className="text-xs uppercase text-slate-500">Distancia</p>
            <p className="mt-2 text-2xl font-semibold">{distancia}</p>
          </div>
          <div className="p-4">
            <p className="text-xs uppercase text-slate-500">Combustible</p>
            <p className="mt-2 text-2xl font-semibold">{combustible}</p>
          </div>
          <div className="p-4">
            <p className="text-xs uppercase text-slate-500">Estado</p>
            <p className="mt-2 font-medium">{mensajeEstado}</p>
          </div>
        </section>

        <div>
          <button
            onClick={handleAterrizar}
            className="bg-slate-900 px-4 py-2 text-sm font-medium text-white cursor-pointer"
          >
            Aterrizar
          </button>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 p-4">
            <h2 className="text-lg font-semibold">Planetas visitados</h2>
            {planetasVisitados.length === 0 ? (
              <p className="text-sm text-slate-600">Aun no hay planetas visitados.</p>
            ) : (
              <div className="space-y-2">
                {planetasVisitados.map((nombre) => (
                  <Planeta key={nombre} nombre={nombre} />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3 p-4">
            <h2 className="text-lg font-semibold">Registro de planetas</h2>
            <Formulario onAgregarPlaneta={handleAgregarPlaneta} />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 p-4">
            <h2 className="text-lg font-semibold">Bitácora de planetas</h2>
            {planetasRegistrados.length === 0 ? (
              <p className="text-sm text-slate-600">Aun no hay planetas en la bitácora.</p>
            ) : (
              <PlanetasRegistrados
                planetasRegistrados={planetasRegistrados}
                setPlanetaSeleccionado={setPlanetaSeleccionado}
                onEditar={handleEditarPlaneta}
                onEliminar={handleEliminarPlaneta}
              />
            )}
          </div>

          <div className="space-y-3 p-4">
            <h2 className="text-lg font-semibold">Detalle del planeta</h2>
            {planetaSeleccionado ? (
              <Planeta
                nombre={planetaSeleccionado.nombre}
                descripcion={planetaSeleccionado.descripcion}
              />
            ) : (
              <p className="text-sm text-slate-600">Selecciona un planeta para ver su descripción detallada.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App
