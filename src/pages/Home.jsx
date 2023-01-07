import React from 'react'
import About from '../components/about section/About'
import Hero from '../components/hero section/Hero'
import Navbar from '../components/navbar/Navbar'
import Portfolio from '../components/portfolio section/Portfolio'
import Services from '../components/services section/Services'

const Home = () => {
  return (
    <div className='w-full '>
        <Navbar/> 
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
    </div>
  )
}

export default Home