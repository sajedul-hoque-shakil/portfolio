import React from 'react'
import Services from './Services'
import Service1 from './images/service1.webp'
import Service2 from './images/service2.png'
import Service3 from './images/service3.webp'
import Service4 from './images/service4.png'
import Service5 from './images/service5.png'

function Service() {
  return (
    <section className='mx-16 my-5 p-5 bg-slate-600 text-center' id='service'>
        <h4  className='text-3xl font-semibold w-60  py-3 m-3 bg-slate-800 text-blue-500 rounded-xl mx-auto '>My Service</h4>
        <div className='bg-slate-800 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 p-5'>

        <Services images={Service1} name='Responsive Website'/>
        <Services images={Service2} name='E-commers Website'/>
        <Services images={Service3} name='Portfolio Website'/>
        <Services images={Service4} name='Blog Website'/>
        <Services images={Service5} name='Parsonal Website'/>
        <Services images={Service5} name='Parsonal Website'/>
        </div>
    </section>
  )
}

export default Service