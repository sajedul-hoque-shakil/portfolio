import React from 'react'
import Skill1 from './Skill1'
import { FaHtml5 } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
function Skills() {
  return (
    <section className='m-10 mx-16 p-5 bg-slate-600 text-center' id='skills'>
      <h4 className='text-4xl font-semibold p-3 w-56 rounded-xl my-3 bg-slate-900 text-blue-500 inline-block mx-auto'>Skills</h4>
      <Skill1 icon={<FaHtml5/> } name="Html" />
      <Skill1 icon={<IoLogoCss3/>} name=" CSS"/>
      <Skill1 icon={<RiTailwindCssFill/>} name="TailwindCss"/>
      <Skill1 icon={<FaBootstrap/>} name=" Bootstrap"/>
      <Skill1 icon={<FaJs/>} name='Js'/>
      <Skill1 icon={<FaReact/>} name=' React' />
      <Skill1 icon={<FaNodeJs/>} name=' NodeJs' />
      <Skill1 icon={<FaWordpress/>} name='Wordpress'/>
   
    </section>
  )
}

export default Skills