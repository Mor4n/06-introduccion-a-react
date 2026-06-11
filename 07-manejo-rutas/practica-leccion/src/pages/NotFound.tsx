import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="text-center py-12 flex flex-col items-center">
      <img src="https://cdnl.iconscout.com/lottie/premium/thumb/pagina-de-error-404-animation-gif-download-3299960.gif" alt="" className='w-100' />
      <h1 className="text-4xl font-black text-red-600 mb-2">404</h1>
      <p className="text-gray-600 mb-6">La ruta que intentaste visitar no existe.</p>
      <Link to="/" className="border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">
        VOLVER AL INICIO
      </Link>
    </section>
  );
}

export default NotFound;