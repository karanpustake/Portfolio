import React from 'react'
import { AiOutlineDiscord } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";


function Bottom() {
    return (
        <div>
            <div className=' flex justify-between mx-64 max-md:mx-12 max-lg:mx-12 max-xl:mx-24 max-xl:items-center   max-[550px]:flex-col  items-center'>
          
            <div className='text-iconscolorktpbottom h-auto flex gap-4 mb-3 text-2xl '>

              <a href="https://discord.com/users/586083808508379137" target="_blank" rel="noopener noreferrer" className='p-2 hover:bg-gray-800 transition  duration-300 ease-in-out rounded-md'>

                <AiOutlineDiscord  />
              </a>
              <a href="mailto:karanpustake0@gmail" target="_blank" rel="noopener noreferrer" className='p-2 hover:bg-gray-800 transition  duration-300 ease-in-out rounded-md'>
                <MdOutlineEmail  />
              </a>
              <a href="https://github.com/karanpustake" target="_blank" rel="noopener noreferrer" className='p-2 hover:bg-gray-800 transition  duration-300 ease-in-out rounded-md'>
                <TbBrandGithub  />
              </a>
              <a href="https://www.linkedin.com/in/karan-pustake-b73b53292/" target="_blank" rel="noopener noreferrer" className='p-2 hover:bg-gray-800 transition  duration-300 ease-in-out rounded-md'>
              <FaLinkedinIn />

              </a>


            </div>
            <div>
                <h1 className='text-orange-300 font-Exo font-semibold'>
                Copyright © Karan Pustake.                </h1>
            </div>
            </div>
        </div>
    )
}

export default Bottom;