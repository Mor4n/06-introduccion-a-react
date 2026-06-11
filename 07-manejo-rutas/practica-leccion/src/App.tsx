import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-2xl mx-auto p-6 font-sans">
        <nav className="border-b-2 border-gray-200 pb-4 mb-6 flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline">Inicio</Link>
          <Link to="/citas" className="text-blue-600 hover:underline">Ver Citas</Link>
        </nav>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/cita/:id" element={<CitaDetalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;