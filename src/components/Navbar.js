import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="text-white bg-gray-900 h-12 grid grid-cols-[1fr_2fr] px-4 md:px-12">
        <div className='flex justify-start items-center md:text-xl text-yellow-400 '><h2>Portfolio</h2></div>
        <nav className='flex text-xs md:text-lg justify-between items-center w-full'>
            <Link href="/"><span className='hover:text-yellow-400'>Home</span></Link>
            <Link href="/"><span className='hover:text-yellow-400'>About</span></Link>
            <Link href="/"><span className='hover:text-yellow-400'>Gallery</span></Link>
            <Link href="/"><span className='hover:text-yellow-400'>Contact</span></Link>
        </nav>
    </div>
  )
}

export default Navbar