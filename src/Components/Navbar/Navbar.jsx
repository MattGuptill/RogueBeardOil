import React, { useState } from 'react'


import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink, Link } from 'react-router-dom';

export default function Navbar ()  {

const navStyle = 'fixed w-full flex flex-col justify-center items-center py-2 md:flex-row md:justify-between md:px-4 bg-black text-white'
const menuOpen = 'flex justify-center pt-4'
const hambmburger = 'absolute right-5 top-8 md:hidden'
const linkListStyle = 'flex flex-col justify-evenly pb-4 h-56 items-center md:flex-row md:pb-0 md:h-0 '
const linkStyle = 'flex px-4 py-2 hover:text-black hover:bg-white font-titles text-3xl transtion-all duration-300 '
const lionHead = 'h-20 rounded-full md:hidden lg:flex lg:ml-20  '


const [openMenu, setOpenMenu] = useState(false)

function toggleMenu() {
  setOpenMenu(!openMenu)
}
    

  return (
    <nav className={navStyle}>
        <Link to='/' className='hidden md:flex h-16'><img src="/src/assets/photos/ROUGUE BEARD OIL.png" alt="rogue beard oil logo" /></Link>
        <Link to='/'><img src="public\images\lion-head-oil.jpg" alt="lion head" className={lionHead}/></Link>


        <div onClick={toggleMenu} className={hambmburger}>{openMenu ? <IoCloseSharp size={32} /> : <FaBars size={28} />}</div>

        <div className={openMenu ? menuOpen : 'hidden md:flex'}>

          <ul className={linkListStyle}>          
          <div className='w-full py-3 md:hidden'><hr className='bg-white text-white' /></div>

            <li ><NavLink className={linkStyle} to='/'>Home</NavLink></li>
            <li><NavLink className={linkStyle} to='/about'>About</NavLink></li>
            <li><NavLink className={linkStyle} to='/contact'>Contact</NavLink></li>
            <li><NavLink className={linkStyle} to='/products'>Products</NavLink></li>
          </ul>
        </div>
    </nav>
  )
}
