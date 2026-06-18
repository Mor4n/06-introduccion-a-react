
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Controls from './components/Controls'
import RouterIndex from './routes/index'
import albums from './data/albums'


function App() {

  
    function addToPlaylist(name) {

      const playlist = JSON.parse(localStorage.getItem("playlist"))|| []
      playlist.push(name)
      localStorage.setItem("playlist", JSON.stringify(playlist))
    }

  return (
  <>
    
    <Navbar/>
    <div className='container'>
      <Sidebar/>
      <Content >
          <RouterIndex addToPlaylist={addToPlaylist(name)}/>
      </Content>
    </div>
    <Controls/>
  </>

  )
}

export default App
