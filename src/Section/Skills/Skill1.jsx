import React from 'react'

function Skill1(props) {
  return (
    <section className='p-2  text-center flex items-center '>
        <p className='text-3xl bg-slate-900 text-blue-500 inline-block   p-2 rounded-full'>{props.icon}</p>
        <p className='text-2xl font-semibold inline-block m text-center ml-5'>{props.name}</p>
        <p className='w-96 h-2 bg-slate-900 rounded-xl ml-2'>  </p>

    </section>
  )
}

export default Skill1