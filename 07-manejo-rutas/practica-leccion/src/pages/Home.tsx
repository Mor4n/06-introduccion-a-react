import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">Inicio</h1>
      <p className="text-gray-700 mb-4">Bienvenido al sistema de citas medicas.</p>
      <Link to="/citas" className="inline-block bg-cyan-500 text-white px-4 py-2 hover:bg-cyan-700">
        Ir a la lista de citas
      </Link>
    </section>
  );
}

export default Home;