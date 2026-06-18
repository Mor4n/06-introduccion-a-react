import React, { useState } from 'react'

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)

  return (
    <nav>
      
      
      {
        loggedIn ? 
        <img src={Avatar} alt="Use avatar"  />:
        <a href="#" onClick={()=> setLoggedIn(true)}>Log in</a>
      }
    </nav>
  )
}

export default Navbar