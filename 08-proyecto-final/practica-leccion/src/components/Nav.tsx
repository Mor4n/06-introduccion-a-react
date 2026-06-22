import React from 'react'
import NavButton from './common/NavButton';
import { useNavigate } from 'react-router-dom';

type Props = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

function Nav({ isLogged, setIsLogged }: Props) {
  const navigate = useNavigate();

  // obtener datos del usuario activo
  const usuarioActivo = isLogged 
    ? JSON.parse(localStorage.getItem('usuarioActivo') || '{}') 
    : null;

  const handleLogout = () => {
    setIsLogged(false);
    // eliminar usuario activo
    localStorage.removeItem('usuarioActivo');
    navigate('/login');
  };

  return (
    <div className='flex flex-col w-64 h-screen sticky top-0 border-r border-gray-800 p-4 shrink-0'>
      <div className='pl-3 mb-4'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="X Logo" className='w-8' />
      </div>
      <NavButton
        icono={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="#e4e4e4" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"></path>
        </svg>}
        texto={"Inicio"}
        url={`/`}
      />

      {isLogged && (
        <>
          <NavButton
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#f5f5f5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path>
            </svg>}
            texto={"Perfil"}
            url={`/profile`}
          />

          <NavButton
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#f5f5f5" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"></path>
            </svg>}
            texto={"Cerrar sesión"}
            onClick={handleLogout}
          />

          <div className='flex items-center gap-3 p-3 mt-auto mb-4 hover:bg-[#181818] rounded-full cursor-pointer transition'>
            <img 
              src={usuarioActivo?.img} 
              alt="Avatar" 
              className='w-10 h-10 rounded-full border border-gray-600 object-cover'
            />
            <div className='flex flex-col overflow-hidden'>
              <span className='text-white font-bold truncate'>{usuarioActivo?.user}</span>
              <span className='text-gray-500 text-sm'>@{usuarioActivo?.user?.toLowerCase()}</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Nav