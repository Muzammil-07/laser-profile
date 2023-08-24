import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="text-white bg-gray-900 h-12 grid grid-cols-[1fr_2fr] px-4 md:px-12 fixed top-0 w-full z-10">
        <div className='flex justify-start items-center md:text-xl text-yellow-400 '><h2>Portfolio</h2></div>
        <nav className='flex text-xs md:text-lg justify-end space-x-4 items-center w-full'>
            {/* <Link href="/"><span className='hover:text-yellow-400'>Home</span></Link>
            <Link href="/"><span className='hover:text-yellow-400'>About</span></Link>
            <Link href="/"><span className='hover:text-yellow-400'>Gallery</span></Link>
            <Link href="/"><span className='hover:text-yellow-400'>Contact</span></Link> */}
            <Link href="/"><span className='bg-yellow-400 px-2 py-2 rounded-md w-[150px]'>Experience</span></Link>
            <Link href="/"><span className='bg-yellow-400 px-2 py-2 rounded-md w-[150px]'>Download cv</span></Link>
        </nav>
    </div>
  )
}

export default Navbar