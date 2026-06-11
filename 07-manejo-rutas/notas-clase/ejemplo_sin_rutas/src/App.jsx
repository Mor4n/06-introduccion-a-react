import { useState } from "react"
import "./index.css"

function NavBar({ setPage }) {
  
  return(
  <nav>
      <a href="#" onClick={ ()=>  { setPage('posts') } }>Posts</a>
      <a href="#" onClick={ ()=>  { setPage('portfolio') } }>Portfolio</a>
      <a href="#" onClick={ ()=>  { setPage('about') } }>About</a>
  </nav>)
}


function Posts() {
  return <h1>Posts</h1> 
}

function Portfolio() {
  return <h1>Portfolio</h1>
}

function About() {
  return <h1>About</h1>
}

function App() {

  const [page, setPage] = useState('posts');

  
  function SelectPage(pageName) {
      switch (pageName) {
        case 'posts':
          return <Posts/>
      
        case 'portfolio':
          return <Portfolio/>
      
        case 'about':
          return <About/>
      


        default:
          return <Posts/>

          break;
      }

  }

  return (
    <>
      <NavBar setPage={setPage}/>
      { SelectPage(page) }
    </>
  )
}

export default App
