import React from 'react'

const Header = ({AppTitle, Brand}) => {
  return (
    <div className='py-3 mb-10'>
        <h1 className='font-bold font-heading text-3xl'>{AppTitle}</h1>
        <p className='text-neutral-500 font-body'>{Brand}</p>
    </div>
  )
}

export default Header