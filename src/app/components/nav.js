import * as React from 'react';
import { useState, useEffect } from 'react';

export const Nav = ({ handleScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container justify-center fixed flex'>
      <div className={`text-white flex rounded-md px-24 py-10 transition duration-300 gap-20 ${isScrolled ? 'backdrop-blur-xl rounded-md transition px-24 py-10 opacity-100' : 'backdrop-blur-0'}`}>
        <p onClick={() => handleScrollTo('profile')} className='hover:text-orange-200 cursor-pointer transition duration-300' >/</p>
        <p onClick={() => handleScrollTo('about')} className='hover:text-orange-200 cursor-pointer transition duration-300'>About</p>
        <p onClick={() => handleScrollTo('projects')} className='hover:text-orange-200 cursor-pointer transition duration-300'>Projects</p>

      </div>
    </div>
  );
};
