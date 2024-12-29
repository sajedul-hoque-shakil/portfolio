import React from 'react'

function Services(props) {
  return (
    <section className='mx-auto'>
      <div className='m-3'>
        <img src={props.images} alt=" Service" className='w-40 h-40 object-cover origin-center bg-blue-500 p-4 rounded-xl' />
      </div>
      <div>
        <h4 className='text-2xl font-semibold text-blue text-left'>{props.name}</h4>
      </div>
    </section>
  )
}

export default Services