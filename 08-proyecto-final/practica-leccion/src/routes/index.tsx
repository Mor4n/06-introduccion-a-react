import React, { useState } from 'react'
import { Route, Routes,Navigate,Outlet } from "react-router-dom"
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'

function RoutesIndex() {

    const [isLogged, setIsLogged] = useState(false);

  return (
    <Routes>



        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>


        {/* // Rutas protegida */}
        <Route element={isLogged ? <Outlet/> : <Navigate to="/"/>}>
        
            <Route path='/profile' element={<Profile/>}/>


        </Route>


    </Routes>

  )
}

export default RoutesIndex