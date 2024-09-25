import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

  
  return (
    <div className='w-full h-16 '>
        <nav className='flex items-center gap-24 p-4 justify-center font-semibold text-white'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/login'>Log In</NavLink>
        </nav>
    </div>
    
  )
}

export default NavBar