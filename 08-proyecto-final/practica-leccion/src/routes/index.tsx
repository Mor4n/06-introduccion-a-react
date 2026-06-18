import React, { useState } from 'react'
import { Route, Routes,Navigate,Outlet } from "react-router-dom"
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Signup from '../components/Signup'

function RoutesIndex() {

    const [isLogged, setIsLogged] = useState(true);

  return (
    <Routes>



        <Route path='/' element={<Home isLogged={isLogged}/>}/>
        

        {/* // Rutas protegida */}


        {/* si no tengo sesión activa, no tengo un perfil propio al cual entrar yo */}

        <Route element={isLogged ? <Outlet/> : <Navigate to="/"/>}>

            <Route path='/profile' element={<Profile/>}/>

        </Route>

        {/* si tengo sesión activa, no quiero que pueda entrar a login o sign up a menos que tenga la sesión cerrada */}
        <Route element={!isLogged ? <Outlet/> : <Navigate to="/"/>}>

            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            
        </Route>


    </Routes>

  )
}

export default RoutesIndex