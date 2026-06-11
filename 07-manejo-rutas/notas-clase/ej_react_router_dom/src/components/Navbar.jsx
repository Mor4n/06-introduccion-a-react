import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    
    useEffect(() => {
      console.log("Recargando...");
      
    }, [])
    

    // nota: funciona... pero, recarga la página
//   return (
//   <nav>
//       <a href="posts" >Posts</a>
//       <a href="portfolio" >Portfolio</a>
//       <a href="about" >About</a>
//   </nav>)

    // nota: para ello usamos los links de react router dom
    return(
        <nav>
            <NavLink to={"/posts"}>Posts</NavLink>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
            <NavLink to={"/about"}>About</NavLink>

            <NavLink to={"/urlParams/Alex"}>Ir a hola</NavLink>

            

        </nav>

    )

}

export default Navbar