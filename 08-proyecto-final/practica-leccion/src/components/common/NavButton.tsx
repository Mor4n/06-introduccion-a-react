
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavButton( {icono, texto, url}) {
    const navigate = useNavigate();

    function handleClick() {
        // console.log("Hizo click");
        navigate(url);
    }

  return (
        <a className='flex items-center gap-2 cursor-pointer' onClick={handleClick}>
            
            <div className='text-3xl'>{icono}</div>
            <h3 className='text-white'>{texto}</h3>
        </a>

  )
}

export default NavButton