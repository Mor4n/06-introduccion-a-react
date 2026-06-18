import React from 'react'

function Login() {
  return (
    <div className='mt-25'>
     
        <div className='flex flex-col items-center w-full'>
        
        <div className='flex flex-col gap-5'> 
            <h1 className='text-white text-3xl'>Iniciar sesión</h1>
        <label className='text-white'  htmlFor="nombre">Nombre de usuario</label>
        <input className='text-white border border-gray-600 rounded py-1 px-10 '  type="text" name='nombre' />

        <label className='text-white'  htmlFor="password">Contraseña</label>
        <input className='text-white border border-gray-600 rounded py-1 px-10 '  type="password" name='password'/>

        <button className='bg-white rounded-full font-bold text-black py-3 px-20 cursor-pointer hover:bg-gray-200'>Continuar</button>
        </div>
        
        </div>

    </div>
  )
}

export default Login