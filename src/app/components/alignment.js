import * as React from 'react';
import { useRef } from 'react';
import { Nav } from './nav';
import { Profile } from './profile';
import About from './about';
import DiscordStatus from './discordStatus';
import Skills from './skills';
import Projects from './projects';
import Bottom from './bottom';

export const Alignment = () => {
  const aboutRef = useRef(null);                            
  const projectsRef = useRef(null);                            
  const profileRef = useRef(null);                            
  const smoothScrollTo = (target) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; 
    let start = null;
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    requestAnimationFrame(animation);
  };
  
  const handleScrollTo = (section) => {
    if (section === 'about') {
      smoothScrollTo(aboutRef.current);
    } else if (section === 'projects') {
      smoothScrollTo(projectsRef.current);
    } else if (section === 'profile'){
      smoothScrollTo(profileRef.current);
    }
  };

  return (
    <div id="Starter">
      <h1 className='absolute text-[30vh] -z-30 text-stroke text-white opacity-10 translate-x-24 translate-y-12'>Luke</h1>

      {/* Navbar */}
      <Nav handleScrollTo={handleScrollTo} />

      {/* Profile Section */}
      <div className='flex justify-center ' ref={profileRef}>
        <Profile />
        
      </div>

      {/* About Section */}
      <div className='flex text-center items-center gap-14 my-12 justify-center' ref={aboutRef}>
        <DiscordStatus userId={"586083808508379137"} />
        <About />
        <h1 className='absolute text-[30vh] text-stroke text-white opacity-10 translate-x-[70vh] -translate-y-6'>!!</h1>

      </div>

      {/* Skills Section */}
      <div className='flex justify-center'>
        <Skills />
      </div>

      {/* Projects Section */}
      <h1 className='absolute text-[30vh] text-stroke text-white opacity-10 translate-x-32 -translate-y-6'>&#60;	
      / &#62;	
      </h1>
      <div className='flex my-3 justify-center'>

        <div className='mt-12 text-center' ref={projectsRef}>
          <h1 className='text-white text-5xl mb-2 font-Outfit font-bold'>Work</h1>
          <p className='text-xl text-yellow-400'>Here is some of my work:</p>
        </div>
      </div>

      <div className='flex justify-center my-16 gap-12'>
        <Projects 
          title={'PhotosApp'} 
          linktoproject={'https://github.com/karanpustake/Image-Search-App-project'} 
          languageused={"Html, Css, Javascript"} 
          description={"This is one of my web development project. I've created an Image Search App using HTML, CSS and JavaScript also with the help of unsplash.com API service"} 
        />
        <Projects 
          title={'Blog-react'} 
          linktoproject={'https://github.com/karanpustake/Blog-React'} 
          languageused={"JavaScript"} 
          description={"I just made a basic bitcoin blog using vite react js for my own practice."} 
        />
      </div>

      {/* Bottom Section */}
      <div className='mb-12'>
        <Bottom />
      </div>
    </div>
  );
};
