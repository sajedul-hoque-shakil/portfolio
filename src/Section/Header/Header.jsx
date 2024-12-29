import React from 'react'
 function Header(){


  return (
    <section className='mx-auto my-5'id='home' >
      <p className='text-2xl text-center'>Hi <span className='font-semibold text-3xl text-blue-400 italic'>am...</span></p>
      <h1 className='text-center font-black text-4xl '>Sajedul Hoque Shakil</h1>
      <h2 className='text-center font-medium text-3xl'>Fontent Developer...</h2>
      <div className='mx-auto text-center'>
      <button className='m-2 p-2 bg-orange-400 text-xl font-medium rounded-xl '> Download CV </button>
      <button className='m-2 p-2 font-semibold text-xl rounded-xl bg-blue-500'> Lest's Talks</button>
      </div>
      
    </section>
  )
}

export default Header