import * as React from 'react';
import Image from 'next/image'

import { AiOutlineDiscord } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";



export const Profile = () => {
  return (
    <>
      <div className=' mt-24  '>
        <div className='flex items-center max-md:flex-col-reverse max-md:text-center max-[550px]:text-left'>


          <div className=' mr-32 max max-md:ml-12 max-xl:mr-12 max-lg:ml-12 max-lg:mr-0 max-md:mr-9 max-[550px]:ml-8 ' >
            <h1 className='text-6xl  max-lg:text-4xl max-md:mt-12 text-white my-6 font-bold '>
              Hi, Iam Karan Pustake
            </h1>
            <p className='text-3xl my-6 max-md:text-2xl text-white  font-normal font-Exo w-96 max-md:w-auto '>
              an dedicated geek who loves to make things in an ingenious way.
            </p>
            <div className='w-auto my-6 text-iconscolorktp  flex gap-8 text-3xl max-md:flex max-md:justify-center max-[550px]:justify-normal '>

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
          </div>
          <div className='max-md:w-64 max-md:mt-12 max-lg:w-64 lg:mr-12 max-[550px]:hidden'>
            <Image className='rounded-xl hover:scale-110 transition duration-700' src="/images/karan.jpeg" alt="My image" width={300} height={300} />
          </div >

        </div>

      </div>

    </>

  )
}

