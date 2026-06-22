import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login( {setIsLogged, isLogged}) {

  const [user,setUser] = useState(null);
  const [pass,setPass] = useState(null);
  const navigate = useNavigate();

  function verificarDatos() {
    console.log(isLogged);
    

      // console.log(user," ", pass);
    let arregloUsuarios = []
    arregloUsuarios = JSON.parse(localStorage.getItem('usuarios'))||[];

    arregloUsuarios.filter( el => {
        if(el.user === user){
          // Usuario encontrado, toca checar la contraseña
          if(el.pass === pass){
            console.log("Login exitoso");
            setIsLogged(true)
             navigate("/")
            return;

          }else{
            console.log("Contraseña incorrecta");
          }





        }else{
          console.log("Usuario no encontrado");
          

        }

    })


    
  }




  return (
    <div className='mt-25'>
     
        <div className='flex flex-col items-center w-full'>
        
        <div className='flex flex-col gap-5'> 
            <h1 className='text-white text-3xl'>Iniciar sesión</h1>
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

export default Login