import React, { useState } from 'react'
import './navbar.css'
import logo from './../../assets/beejaylogo.png'
import { Link } from "react-router-dom";
import { FiSun } from 'react-icons/fi';
import { RxGithubLogo } from 'react-icons/rx';
import { FaLinkedin } from 'react-icons/fa';


const Navbar = () => {
    const [openMenu, setOpenMenu]=useState(false);

  return (
    <div className='max-w-7xl mx-auto  min-h-lg h-[60px] flex items-center justify-between'>
        <div className="nav_left w-1/2 ">
            <Link to='/'><img src={logo} alt="ben\logo" className="benlogo w-1/4" /></Link>
        </div>
        <div className="nav_right w-1/2 flex gap-16 justify-end ">
            <nav>
                <ul className='flex  gap-4 text-mygray text-'>
                    <li className='nav-item' >
                        <Link className='nav-link text-md font-semibold' onClick={()=>setOpenMenu(false)} to='about'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-md font-semibold' onClick={()=>setOpenMenu(false)} to='services'>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-md font-semibold' onClick={()=>setOpenMenu(false)} to='portfolio'>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-md font-semibold' onClick={()=>setOpenMenu(false)} to='testimonials'>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-md font-semibold' onClick={()=>setOpenMenu(false)} to='contact'>Contact</Link>
                    </li>
                </ul> 
            </nav>
           <div className="nav_buttons flex items-center gap-4">
          
            <a href='https://github.com/beejayarts' className='transition duration-700 hover:text-myblue'>
                < RxGithubLogo/>
            </a>
            <a href='https://www.linkedin.com/in/benjamin-onuoha-4125a691/'  className='transition duration-700 hover:text-myblue'>
                <FaLinkedin/>
            </a>
            <button className='dark_bright_mode transition duration-700 hover:text-myblue'>
            <FiSun/>
            </button>
           </div>
        </div>
    </div>
  )
}

export default Navbar