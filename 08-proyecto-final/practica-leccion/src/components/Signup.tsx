import React, { useEffect, useState } from 'react'

function Signup() {

  
  const [user,setUser] = useState(null);
  const [pass,setPass] = useState(null);

  
  

  function verificarDatos() {
    const usuarioNuevo = {
      'user':user,
      'pass':pass
    }

    let arregloUsuarios = JSON.parse(localStorage.getItem('usuarios'))||[];

    arregloUsuarios.push(usuarioNuevo);

    localStorage.setItem('usuarios',JSON.stringify(arregloUsuarios));
    
    // console.log(arregloUsuarios);
    

    
    
    
  }


  return (
     <div className='mt-25'>
     
        <div className='flex flex-col items-center w-full'>
        
        <div className='flex flex-col gap-5'> 
            <h1 className='text-white text-3xl'>Registrarse</h1>
        <label className='text-white'  htmlFor="nombre">Nombre de usuario</label>
        <input className='text-white border border-gray-600 rounded py-1 px-10 '  type="text" name='nombre' onChange={ (e)=> setUser(e.target.value)} />

        <label className='text-white'  htmlFor="password">Contraseña</label>
        <input className='text-white border border-gray-600 rounded py-1 px-10 '  type="password" name='password' onChange={ (e)=> setPass(e.target.value)}/>

        <button className='bg-white rounded-full font-bold text-black py-3 px-20 cursor-pointer hover:bg-gray-200' onClick={verificarDatos}>Continuar</button>
        </div>
        
        </div>

    </div>
  )
}

export default Signup