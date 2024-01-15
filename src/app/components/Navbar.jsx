import React from 'react'
import Button from './Button'

const Navbar = ({onAdd}) => {
  return (
    <div className='flex h-[112px] items-center justify-between'>
      <div className='text-4xl text-[#426B1F] font-semibold'>Recipe App</div>
      <div className='flex gap-10 text-lg items-center'>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Recipes</a>
        <Button onAdd={onAdd} />
      </div>
    </div>
  )
}

export default Navbar