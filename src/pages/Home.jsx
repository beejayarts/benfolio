import React from 'react'
import About from '../components/about section/About'
import Hero from '../components/hero section/Hero'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='w-full '>
        <Navbar/> 
        <Hero/>
        <About/>
    </div>
  )
}

export default Home