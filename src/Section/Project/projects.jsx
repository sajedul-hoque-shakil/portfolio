import React from 'react'

function projects(props) {
  return (
    <section className='mx-auto mb-5'>
       
        <img src={props.images} alt="projects1"  className='h-52 w-52 object-cover origin-center'/>
        <div className='text-left'>

        <span className='text-xl bg-slate-900 text-blue-500 p-1 border-2 rounded-lg inline-block my-2 mr-1 '>{props.name}</span>
        <a href="#" className='inline-block text-xl p-1 bg-slate-800 text-blue500 border-2 rounded-lg'>
            
            <span>Demo Live</span>
            </a>
        </div>
    </section>
  )
}

export default projects