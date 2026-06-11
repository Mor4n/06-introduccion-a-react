import { Link } from 'react-router-dom';

const citas = [
  { id: 1, paciente: 'Victoria' },
  { id: 2, paciente: 'Oscar' },
  { id: 3, paciente: 'Flores' },
];

function Citas() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Lista de Citas</h1>
      <ul className="border border-gray-300 divide-y divide-gray-300">
        {citas.map((cita) => (
          <li key={cita.id} className="p-3 hover:bg-gray-50">
            <Link to={`/cita/${cita.id}`} className="text-blue-600 block">
              Cita #{cita.id} - <span className="font-medium">{cita.paciente}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Citas;