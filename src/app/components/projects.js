import React from 'react';

function Projects(props) {
  const limitword = (text, limit) => {
    const word = text.split(' ');
    if (word.length <= limit) {
      return text;
    }
    return word.slice(0, limit).join(' ') + '...';
  };

  const slicedText = limitword(props.description, 22);

  return (
    <div className='hover:-translate-y-2 transition duration-300 hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.5)]'>
      <a href={props.linktoproject} target='_blank' rel="noreferrer">
        <div className="border-red-300 border-[2px] bg-white rounded-md h-48 max-[550px]:h-[12rem] w-[60vh] max-[550px]:w-[55vh] flex flex-col justify-between p-3">
          <div>
            <div className="githubusername flex items-center gap-2">
              <img
                src="https://avatars.githubusercontent.com/u/98682337?v=4"
                className="h-5 w-5 rounded-2xl"
                alt="Pfp" 
              />
              <h1>karanpustake</h1>
            </div>

            <h1 className="title text-2xl font-Exo text-blue-900 font-semibold mt-1 max-[550px]:text-xl">
              {props.title}
            </h1>

            <p className="description mt-1">{slicedText}</p>
          </div>

          <div className="flex items-center gap-2 max-[550px]:mt-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full "></span>
            <p className="languageused text-lg max-[550px]:text-sm">{props.languageused}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Projects;
