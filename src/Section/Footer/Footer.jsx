import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <section className='flex mt-5 justify-around bg-black text-center p-5 '>
      <div className=''>

      <p className='text-2xl font-medium'>copyright</p>
      <h1 className='text-3xl font-bold -p3'>Sajedul Hoque Shakil</h1>
      </div>
      <div className='flex text-blue-400 text-4xl mt-2'>
        <a href="#" className='cursor-pointer'><FaFacebookSquare /></a>
        <a href="#" className='cursor-pointer'><FaInstagramSquare /></a>
        <a href="#" className='cursor-pointer'><FaXTwitter /></a>
        <a href="#" className='cursor-pointer'><FaGithubSquare  /></a>
      </div>
    </section>
  )
}

export default Footer