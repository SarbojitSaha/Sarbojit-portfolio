import React from 'react'
import { NAVIGATION_LINKS } from '../constants';
import { useState } from 'react'
import { RiMenuFill } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false)

    const handelLinkClick=()=>{
        setMenuOpen(false)
    }
    
      
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <div className='flex justify-between items-center max-w-6xl mx-auto
        md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg'>
            <div className='text-white font-semibold text-xl uppercase'>
                <a href='/'>
                    Sarbojit Saha
                </a>
            </div>
            <div className='hidden md:flex space-x-8'>
                {NAVIGATION_LINKS.map((link,index)=>(
                    <a href={link.href} key={index} className="text-white
                    hover:text-stone-400 transition duration-300">
                        {link.label}
                    </a>
                ))}
            </div>
            <div className='md:hidden'>
                <button onClick={()=>setMenuOpen(!menuOpen) }
                className='text-white focus:outline-none' aria-label=
                {menuOpen?"Close Menu":"Open Menu" }>
                    {menuOpen?(
                        <RiCloseFill className="w-6 h-6" />
                    ):(
                        <RiMenuFill className="w-6 h-6" />
                    ) }
                </button>
            </div>
        </div>
        
        {menuOpen && (
           <div className='md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto'>
           {NAVIGATION_LINKS.map((link,index)=>(
            <a href={link.href} key={index} className="text-white
                 hover:text-stone-400 transition duration-300" onClick={handelLinkClick}>
                {link.label}
            </a>
           ))} 
           </div>
        )}
    </div>
  )
}

export default Navbar
