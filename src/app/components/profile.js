import * as React from 'react';
import Image from 'next/image'

import { AiOutlineDiscord } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";



export const Profile = () => {
  return (
    <>
      <div className='max-w-[150vh] mt-24 '>
        <div className='flex'>


          <div className=' mr-32 ' >
            <h1 className='text-6xl text-white my-6 font-bold'>
              Hi, Iam Karan Pustake
            </h1>
            <p className='text-3xl my-6 text-white font-normal font-Exo w-96'>
              an dedicated geek who loves to make things in an ingenious way.
            </p>
            <div className='w-auto my-6 text-iconscolorktp  flex gap-8 text-3xl '>

              <a href="https://discord.com/users/586083808508379137" target="_blank" rel="noopener noreferrer">

                <AiOutlineDiscord className='hover:text-iconscolorktphover transition cursor-pointer' />
              </a>
              <a href="mailto:karanpustake0@gmail" target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail className='hover:text-iconscolorktphover transition cursor-pointer' />
              </a>
              <a href="https://github.com/karanpustake" target="_blank" rel="noopener noreferrer">
                <TbBrandGithub className='hover:text-iconscolorktphover transition cursor-pointer' />
              </a>


            </div>
            {/* <button className=' bg-zinc-500 py-4 px-4 rounded-md hover:bg-zinc-300 transition'>My </button> */}
          </div>
          <div className=''>
            <Image className='rounded-xl hover:scale-110 transition duration-700' src="/images/karan.jpeg" alt="My image" width={300} height={300} />
          </div >

        </div>

      </div>

    </>

  )
}

