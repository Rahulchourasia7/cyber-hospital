import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => { 
  return (
    <div className='flex justify-end pr-20 '>  
     <ul className='flex flex-row gap-10 fixed top-0 
     lg:text-xl  pt-5'>  
<li><NavLink to='/'> Home</NavLink> </li>
    <li> <NavLink to='/about'> About</NavLink> </li>
    <li> <NavLink to='/Appointment'>Appointment</NavLink></li> 
</ul>
   
    </div>
  ) 
} 

export default Header 
 