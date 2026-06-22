import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {

  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');
  const [imgUrl,setImgUrl] = useState('');
  const [error, setError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const navigate = useNavigate();

  function verificarDatos() {
    if (!user || !pass) {
      setError('Usuario y contraseña son obligatorios');
      return;
    }

    const usuariosRegistrados = localStorage.getItem('usuarios');
    let arregloUsuarios = usuariosRegistrados ? JSON.parse(usuariosRegistrados) : [];

    const usuarioExiste = arregloUsuarios.some((u: any) => u.user === user);

    if (usuarioExiste) {
      setError('Este nombre de usuario ya está tomado');
      return;
    }

    const usuarioNuevo = {
      'user':user,
      'pass':pass,
      'img': imgUrl || 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
    }

    arregloUsuarios.push(usuarioNuevo);
    localStorage.setItem('usuarios',JSON.stringify(arregloUsuarios));
    
    setMensajeExito('Usuario registrado exitosamente! Redirigiendo...');
    setError('');

    setTimeout(() => {
        navigate('/login');
    }, 2000);
  }

  return (
     <div className='mt-25'>
        <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col gap-5'> 
            <h1 className='text-white text-3xl'>Registrarse</h1>
            {error && <p className='text-red-500 font-bold bg-red-100 p-2 rounded text-center'>{error}</p>}
            {mensajeExito && <p className='text-green-500 font-bold bg-green-100 p-2 rounded text-center'>{mensajeExito}</p>}
        <label className='text-white'  htmlFor="nombre">Nombre de usuario</label>
        <input className='text-white border border-gray-600 rounded py-1 px-10 '  type="text" name='nombre' onChange={ (e)=> {setUser(e.target.value); setError('');}} />

        <label className='text-white'  htmlFor="password">Contraseña</label>
        <input className='text-white border border-gray-600 rounded py-1 px-10 '  type="password" name='password' onChange={ (e)=> {setPass(e.target.value); setError('');}}/>

        <label className='text-white'  htmlFor="imagen">Imagen (URL)</label>
        <input className='text-white border border-gray-600 rounded py-1 px-10 '  type="text" name='imagen' onChange={ (e)=> setImgUrl(e.target.value)} />

        <button className='bg-white rounded-full font-bold text-black py-3 px-20 cursor-pointer hover:bg-gray-200' onClick={verificarDatos}>Continuar</button>
        </div>
        </div>
    </div>
  )
}

export default Signup