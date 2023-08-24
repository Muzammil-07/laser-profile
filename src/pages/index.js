import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Crousal from '@/components/Crousal'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main
    >
   
      <Navbar />
      <Crousal />
      <About/>
      <Gallery/>
      <Contact/>
            
    </main>
  )
}
