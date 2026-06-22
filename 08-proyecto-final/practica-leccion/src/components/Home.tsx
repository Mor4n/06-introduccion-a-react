import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Logout from './Logout'

function Home( {isLogged, setIsLogged} ) {
  return (
    <div className='pb-20'>

      <Nav/>
      <p className='text-white'>{isLogged ? "Bienvenido a X":"Inicia sesión para ver más cosas"}</p>
      
      {isLogged ? <Logout isLogged={isLogged} setIsLogged={setIsLogged} />: <Footer/>}
    </div>
  )
}

export default Home