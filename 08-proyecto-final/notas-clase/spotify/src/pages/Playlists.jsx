import React, { useEffect } from 'react'

function Playlists() {
  
  const tracks = localStorage.getItem("playlist")


  return (
    <div>
      <h1>Playlists</h1>

      <div className='trackList'>

            {
                tracks.map(({name,duration})=>{
                    return(
                        <div>
                            <p>{name}</p>
                            <p>{duration}</p>
                            
                        </div>
                    )


                })

            }
            </div>

    </div>
  )
}

export default Playlists