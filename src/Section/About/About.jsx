import React from 'react'

function About() {
  return (
    <section className='mx-16 p-5 text-center bg-slate-600' id='about'>
    <h4 className='text-3xl bg-slate-800 text-blue-500 mx-auto p-3 rounded-xl my-4 inline-block'>About</h4>
    <p  className='w-3/4 mx-auto text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum earum nisi asperiores error tempora maxime quae eos, obcaecati sit ut. A adipisci quisquam esse natus delectus minima soluta voluptatibus sequi quis magni totam, quas nihil vitae repudiandae ex debitis necessitatibus!</p>

    <form action="#" className='flex flex-col bg-slate-700 mx-16 p-5'>
        <h4 className='w-60 p-3 bg-slate-800 text-blue-500 mx-auto text-3xl font-semibold my-5 rounded-xl'>Contack</h4>
        <label htmlFor="name" className='text-2xl font-semibold block w-full'>Name:

        <input type="text" placeholder='Enter Your Name...' className='p-2 pl-5 w-2/4 ' />
        </label>
        <label className='text-2xl font-semibold block w-full my-5' htmlFor="email">Email:
          
        <input type="email" name="" id="" placeholder='Enter your Mail' className='p-2 pl-5 w-2/4 '/>
        </label>
        <label className='text-2xl font-semibold block w-full' htmlFor="Massege">Meages: 

        <textarea name="" id="" className='p-2 pl-5 w-2/4 ' rows={6}></textarea>
        </label>
    </form>

</section>
  )
}

export default About