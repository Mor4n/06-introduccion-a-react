import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout({isLogged, setIsLogged}) {

  function cerrarSesion() {
    setIsLogged(false);
    const navigate = useNavigate();

    navigate('/login');
    console.log("La sesión ahora es :", isLogged);
    
  }

  return (
    <div className='text-white'>
        <button className='text-white cursor-pointer' onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  )
}

export default Logout