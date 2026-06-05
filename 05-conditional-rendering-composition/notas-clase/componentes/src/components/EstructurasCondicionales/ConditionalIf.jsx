import React from 'react'

function ConditionalIf({conditional}) {

  if(conditional){
          return (<><p>True</p></>)
  }
  else{
        return (<><p>False</p></>)

  }

  
}

export default ConditionalIf