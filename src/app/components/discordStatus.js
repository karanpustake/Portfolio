import { useState, useEffect } from 'react';
import { fetchLanyardData } from '@/lib/landyard';
// import Image from 'next/image';
const DiscordPresence = ({ userId }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [pfp, setPfp] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchLanyardData(userId);
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [userId]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div className='text-orange-300'>Loading...</div>;


  const spotifyActivity = data.data.activities.find(activity => activity.name === 'Spotify');

  const vscodeActivity = data.data.activities.find(activity => activity.name === 'Visual Studio Code');
      return (
  <div className=" p-4 rounded-lg shadow-lg flex hover:scale-105 transition duration-700 text-white">
<a href='https://discord.com/users/586083808508379137'  target='_blank'>
      <div className='flex gap-5 items-center' >
        <div>
          <h1>Discord : </h1>
          <img
            src={`https://cdn.discordapp.com/avatars/586083808508379137/${data.data.discord_user.avatar}.png?size=256`}
            alt="Album Art"
            className=" w-32 h-32  rounded-lg mt-2"
          />
        </div>
        <div className='text-left'>


          
          <h1 className="text-2xl text-cyan-400 font-bold">{data.data.discord_user.username}</h1>
          <div className='font-Questrial'>

          <p >Status: <span className='text-yellow-400'>{data.data.discord_status}</span> </p>
          <p className='text-gray-200'>{currentTime.toLocaleString()}</p>
          </div>
          </div>
        <div>


        </div>



      </div>

      {spotifyActivity && (
        <div className="mt-4 flex gap-8 items-center">
          <img
            src={`https://i.scdn.co/image/${spotifyActivity.assets.large_image.split(':')[1]}`}
            alt="Album Art"
            className=" w-20 h-20  rounded-md mt-2"
          />
          <div className='text-left'>

          <h2 className="text-xl  ">Listening to..</h2>
          <p className='text-yellow-400'>{spotifyActivity.details}</p>
          <p>{spotifyActivity.state}</p>
          </div>

        </div>
      )}

      {vscodeActivity && (
        <div className="mt-4">
          <h2 className="text-xl">Coding in Visual Studio Code</h2>
          <p>Workspace: {vscodeActivity.details}</p>
          <p>File: {vscodeActivity.state}</p>
        </div>
      )}

      {!spotifyActivity && !vscodeActivity && (
        <div className="mt-4">
          <p></p>
        </div>
      )}</a>  
    </div>
  );
};

export default DiscordPresence;
