import { Route, Routes,Navigate,Outlet } from "react-router-dom"
import Portfolio from "../components/Portfolio"
import AdminDashboard from "../components/AdminDashboard"
import About from "../components/About"
import Posts from "../components/Posts"
import Subpage from "../components/Subpage"

import React from 'react'
import UrlParams from "../components/DynamicRoutes/UrlParams"
import QueryParams from "../components/DynamicRoutes/QueryParams"
import HashParams from "../components/DynamicRoutes/HashParams"


function RoutesIndex() {

  const isAdmin = false;

  return (

    <Routes>
            {/* Rutas estáticas */}
            <Route path="/" element={<Posts/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>


            {/* Rutas dinámicas */}
            <Route path="/urlParams/:name/:name2" element={<UrlParams/>}/>
            <Route path="/queryParams" element={<QueryParams/>}/>
            <Route path="/hashParams" element={<HashParams/>}/>

            {/* Varios niveles */}

            <Route path="/nivel1">
                <Route path="nivel2">
                    <Route path="nivel3" element={<Subpage/>}/>
                </Route>
            </Route>

            {/* Rutas protegidas */}
            <Route element={ isAdmin  ? <Outlet/> : <Navigate to="/" />}>
            {/* Outlet es lo que va a estar dentro de route, o sea todo lo de aca dentro que son rutas protegidas */}

                <Route path="/admin" element={<AdminDashboard/>}/>

            </Route>

    </Routes>
  )
}

export default RoutesIndex