import { useState } from 'react';

interface TweetPostProps {
  isLogged: boolean;
}

function TweetPost({ isLogged }: TweetPostProps) {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (!content.trim()) return;

    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || '{}');
    
    const newTweet = {
      id: Date.now(),
      user: usuarioActivo.user,
      img: usuarioActivo.img,
      content: content,
      date: new Date().toLocaleString()
    };

    const storedTweets = JSON.parse(localStorage.getItem('tweets') || '[]');
    const updatedTweets = [newTweet, ...storedTweets];
    localStorage.setItem('tweets', JSON.stringify(updatedTweets));

    setContent('');
    // reload forzado para que el feed se actualice (en una app real kreo que se usaría estado compartido o context que se va a ver en el siguiente modulo, volver acá)
    window.location.reload();
  };

  if (!isLogged) return null;

  const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || '{}');

  return (
    <div className='border-b border-gray-800 p-4 w-full max-w-2xl'>
      <div className='flex gap-4'>
        <img src={usuarioActivo.img} alt="User" className='w-12 h-12 rounded-full' />
        <div className='flex-1 flex flex-col gap-3'>
          <textarea
            className='bg-transparent text-white text-xl outline-none resize-none w-full h-24'
            placeholder="¿Qué está pasando?!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className='flex justify-end'>
            <button
              onClick={handlePost}
              disabled={!content.trim()}
              className='bg-blue-500 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-600 disabled:opacity-50 transition'
            >
              Postear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetPost;
