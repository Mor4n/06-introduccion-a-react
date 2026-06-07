import React from 'react'

type Props = {
  msg: string
}

function Message({msg}:Props) {

  

  return (
    <div>{msg}</div>
  )
}

export default Message