import { useState } from 'react'
import { Route, Routes,Navigate,Outlet } from "react-router-dom"
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ProfilePage from '../components/ProfilePage'

function RoutesIndex() {

    // Inicializamos el estado basándonos en si hay un usuario activo en localStorage
    const [isLogged, setIsLogged] = useState(() => {
        return localStorage.getItem('usuarioActivo') !== null;
    });

  return (
    <Routes>



        <Route path='/' element={<Home isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
        

        {/* // Rutas protegida */}


        {/* si no tengo sesión activa, no tengo un perfil propio al cual entrar yo */}

        <Route element={isLogged ? <Outlet/> : <Navigate to="/"/>}>

            <Route path='/profile' element={ <ProfilePage isLogged={isLogged} setIsLogged={setIsLogged}/>}/>

        </Route>

        {/* si tengo la sesión iniciada, no quiero que pueda entrar a login o sign up a menos que tenga la sesión cerrada */}
        <Route element={!isLogged ? <Outlet/> : <Navigate to="/"/>}>

            <Route path='/login' element={<Login isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
            <Route path='/signup' element={<Signup/>}/>
            
        </Route>


    </Routes>

  )
}

export default RoutesIndex