import React from 'react'

function Navbar() {
  return (
   <>
   <div className='grid grid-cols-[30%,70%] h-full border shadow-md'>
    <div className='flex justify-center items-center'>
        <p className=' text-2xl font-bold cursor-pointer'>Headding</p>
    </div>
    <div className='flex justify-end items-center'>
        <ul className='me-6'>
            <li className='border px-3 py-1 shadow-xl hover:text-white hover:bg-black rounded-3xl hover:font-bold cursor-pointer'>
            Home
            </li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Navbar