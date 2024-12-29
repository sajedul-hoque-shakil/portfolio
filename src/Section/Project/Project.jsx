import React from 'react'
import Projects from './projects'
import Project1 from './images/project1.png'
import Project2 from './images/project2.png'
import Project3 from './images/project3.png'
import Project4 from './images/project4.png'
import Project5 from './images/project5.webp'
import Project6 from './images/project6.webp'
import Project7 from './images/project7.png'
import Project8 from './images/project8.jpeg'
import Project9 from './images/project9.webp'

function Project() {
  return (
    <section className='mx-16 p-5 bg-slate-600 text-center' id='project'>
        <h4 className='text-4xl font-semibold w-60 py-3 inline-block text-center my-5 rounded-2xl bg-slate-800 text-blue-500'>Projects</h4>
        <div className='p-5 bg-slate-800 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 text-center'>

        <Projects images={Project1} name='ecomarce'/>
        <Projects images={Project2} name='ecomarce'/>
        <Projects images={Project3} name='ecomarce'/>
        <Projects images={Project4} name='ecomarce'/>
        <Projects images={Project5} name='ecomarce'/>
        <Projects images={Project6} name='ecomarce'/>
        <Projects images={Project7} name='ecomarce'/>
        <Projects images={Project8} name='ecomarce'/>
        <Projects images={Project9} name='ecomarce'/>
        </div>
    </section>
  )
}

export default Project