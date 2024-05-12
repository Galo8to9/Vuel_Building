"use client"

import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitterX} from "react-icons/bs"
import Image from 'next/image'
import { useTypewriter, Cursor } from "react-simple-typewriter"


const Hero = () => {

  const [text] = useTypewriter({
    words: ["Building..."],
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 100,
});
  

  return (
    <div className="flex flex-col bg-black h-screen items-center">
      <div className='flex flex-col mt-60 items-center'>
      < Image
            src="/Vuel_logo.png"
            width={200}
            height={200}
            alt="Vuel Logo"
        />

        <div className="flex text-white flex-col m-8">
            <span className="text-xl font-medium">{text}<Cursor/></span>
        </div>

        <div className="text-white mt-32 flex space-x-5">
            <a href="https://www.instagram.com/vuel.io/" className="cursor-pointer hover:text-gray-300 transition-all"> <BsInstagram size={25}/> </a>
            <a href="https://www.instagram.com/vuel.io/" className="cursor-pointer hover:text-gray-300 transition-all"> <BsLinkedin size={25}/> </a>
            <a href="https://www.instagram.com/vuel.io/" className="cursor-pointer hover:text-gray-300 transition-all"> <BsTwitterX size={25}/></a>
        </div>
      </div>
        
    </div>
  )
}
export default Hero


