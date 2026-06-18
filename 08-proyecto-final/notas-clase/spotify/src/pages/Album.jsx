import React from 'react'
import { useParams } from 'react-router-dom'
import albums from '../data/albums';

function Album( {addToPlaylist}) {
    const {id} = useParams();
    const album = albums.find((a)=> a.id ===Number(id))
    const { name, artist, year, cover, tracks} = album

  return (
    <div>
        <h1>{name}</h1>
        <div className='albumFlex'>
            <img src={cover} alt="" />
            <p>{artist} | {year}</p>
            <div className='trackList'>

            {
                tracks.map(({name,duration})=>{
                    return(
                        <div>
                            <p>{name}</p>
                            <p>{duration}</p>
                            <button onClick={()=>{addToPlaylist(name)}}>+</button>
                        </div>
                    )


                })

            }
            </div>

        </div>
    </div>
  )
}

export default Album