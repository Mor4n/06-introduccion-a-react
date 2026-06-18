import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Logout from './Logout'

function Home( {isLogged}) {
  return (
    <div className='pb-20'>

      <Nav/>
      
      {isLogged ? <Logout/>: <Footer/>}
    </div>
  )
}

export default Home