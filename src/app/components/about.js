import React from 'react';

const About = () => {
  return (
    <div className='text-2xl max-w-[150vh] text-white'>
      <div className='flex text-left'>
        <div>
          <h1 className='font-semibold my-6 max-md:text-center max-lg:text-center  max-[550px]:text-4xl max-[550px]:my-2 text-5xl max-[550px]:text-left max-[550px]:ml-8 '>
            About <span className='text-cyan-400'>me</span>
          </h1>
          <p className='font-Exo w-[80vh] max-md:text-center max-lg:text-center max-[550px]:w-auto max-[550px]:mx-6 max-[550px]:text-xl max-[550px]:text-left max-[550px]:ml-8'>
            Hi, I am Karan, a dedicated developer and programmer who enjoys working with code to create practical solutions. 
            I have been on a journey in the world of technology, starting with a genuine interest in programming languages and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
