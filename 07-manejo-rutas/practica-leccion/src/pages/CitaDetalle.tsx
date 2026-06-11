import { useParams } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();
  return (
    <div className=" border border-cyan-400 p-6">
      <h2 className="text-xl font-bold mb-2">Detalles de la Cita</h2>
      <p className="text-lg">ID de la cita: <span className="font-mono bg-white px-1 border border-cyan-300">{id}</span></p>
      <hr className="my-4 border-gray-300" />
      <button 
        onClick={() => window.history.back()}
        className="text-sm text-gray-600 hover:text-black underline cursor-pointer"
      >
        {"<-"} Volver
      </button>
    </div>
  );
}

export default CitaDetalle;