import Nav from './Nav'
import Profile from './Profile'

interface ProfilePageProps {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

function ProfilePage({ isLogged, setIsLogged }:ProfilePageProps) {
  return (
    <div className='flex justify-center min-h-screen bg-black'>
      <Nav
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      />

      <main className='w-full max-w-2xl border-x border-gray-800 min-h-screen'>
        <Profile />
      </main>
    </div>
  );
}
export default ProfilePage