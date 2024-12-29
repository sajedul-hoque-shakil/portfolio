import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { MdMedicalServices } from "react-icons/md";
import { BsProjectorFill } from "react-icons/bs";
function Nav() {
  return (
    <section className='sticky  left-1/2 ' style={{top:550}}>
      <ul className='flex justify-center items-center bg-transparent w-[25rem] p-2 rounded-2xl mx-auto'>
        <li className='m-1 p-2 text-3xl bg-slate-700 font-medium rounded-full text-blue-500'><a href="#home"><IoMdHome /></a></li>
        <li className='m-1 p-2 text-3xl bg-slate-700 font-medium rounded-full text-blue-500'><a href="#about"><IoMdContact /></a></li>
        <li className='m-1 p-2 text-3xl bg-slate-700 font-medium rounded-full text-blue-500'><a href="#skills"><GiSkills /></a></li>
        <li className='m-1 p-2 text-3xl bg-slate-700 font-medium rounded-full text-blue-500'><a href="#service"><MdMedicalServices /></a></li>
        <li className='m-1 p-2 text-3xl bg-slate-700 font-medium rounded-full text-blue-500'><a href="#project"><BsProjectorFill /></a></li>
      
      </ul>
    
    </section>
  )
}

export default Nav