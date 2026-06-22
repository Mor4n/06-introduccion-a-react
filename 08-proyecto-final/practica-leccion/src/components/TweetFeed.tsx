import { useEffect, useState } from 'react';

interface Tweet {
  id: number;
  user: string;
  img: string;
  content: string;
  date: string;
}

function TweetFeed() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem('tweets') || '[]');
    setTweets(storedTweets);
  }, []);

  if (tweets.length === 0) {
    return (
      <div className='p-10 text-center text-gray-500'>
        No hay tweets publicados todavía.
      </div>
    );
  }

  return (
    <div className='w-full max-w-2xl'>
      {tweets.map((tweet) => (
        <div key={tweet.id} className='border-b border-gray-800 p-4 hover:bg-[#080808] transition flex gap-3'>
          <img src={tweet.img} alt={tweet.user} className='w-12 h-12 rounded-full object-cover' />
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <span className='text-white font-bold'>{tweet.user}</span>
              <span className='text-gray-500 text-sm'>@{tweet.user.toLowerCase().replace(/\s/g, '')}</span>
              <span className='text-gray-500 text-sm'>· {tweet.date}</span>
            </div>
            <p className='text-white mt-1 break-words'>{tweet.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TweetFeed;
