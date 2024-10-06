import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center px-7 py-4 gap-2 font-montserrat leading-none border bg-coral-red rounded-full text-white border-coral-red text-lg'>
        {label}
        <img src={iconURL} alt="ArrowRight" 
        className='ml-2 rounded-full w-5 h-5  '
        />
    </button>
  )
}

export default Button
