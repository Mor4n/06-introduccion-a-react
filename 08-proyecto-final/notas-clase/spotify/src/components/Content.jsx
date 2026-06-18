import React, { Children } from 'react'

function Content({children}) {
  return (
    <div className='content'>
      {children}
    </div>
  )
}

export default Content