
import { NavLink } from "react-router-dom"
import Item from "../components/common/Item"
import albums from "../data/albums"

function Albums({children}) {
  return (
    <div>

        <h1>Albums</h1>
        <div id="items">  </div>
        {albums.map( ({id,name,cover,artist,year}) => (
          <NavLink to={`/albums/${id}`}>

                <Item key={id} name={name} image={cover} description={`${artist} | ${year}`} />
        </NavLink>
        ) )}

    </div>
  )
}

export default Albums