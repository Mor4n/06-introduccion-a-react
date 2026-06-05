import React from 'react'

function Switch({color}) {
  switch (color) {
    case 'red':
      return <h1 style={{color: 'red'}}>Red</h1>
    case 'blue':
      return <h1 style={{color: 'blue'}}>Blue</h1>
    case 'green':
      return <h1 style={{color: 'green'}}>Green</h1>
    default:
      return <h1>Color no encontrado</h1>
  }
}

export default Switch