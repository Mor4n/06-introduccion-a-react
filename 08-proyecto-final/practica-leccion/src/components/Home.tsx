import Nav from './Nav'
import Footer from './Footer'
import TweetPost from './TweetPost'
import TweetFeed from './TweetFeed'

interface HomeProps {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

function Home( {isLogged, setIsLogged}: HomeProps ) {
  return (
    <div className='flex justify-center min-h-screen bg-black'>
      <Nav isLogged={isLogged} setIsLogged={setIsLogged}/>
      
      <main className='w-full max-w-2xl border-x border-gray-800 min-h-screen'>
        <div className='p-4 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-md z-10'>
          <h2 className='text-white text-xl font-bold'>Inicio</h2>
        </div>

        <TweetPost isLogged={isLogged} />
        <TweetFeed />
      </main>

     
      {!isLogged &&<Footer/> }
    </div>
  )
}

export default Home