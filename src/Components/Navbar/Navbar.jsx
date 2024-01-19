import React, { useState } from 'react'
import logo from '/src/assets/photos/ROUGUE-BEARD-OIL.png'
import headLogo from '/src/assets/photos/lion-head-oil.jpg' 

import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink, Link } from 'react-router-dom';

export default function Navbar ()  {

const navStyle = 'fixed w-full flex flex-col justify-center items-center py-2 md:flex-row md:justify-between md:px-4 bg-black text-white'
const menuOpen = 'flex justify-center pt-4 md:pt-0'
const hambmburger = 'absolute right-5 top-8 md:hidden'
const linkListStyle = 'flex flex-col justify-evenly pb-7 h-72 items-center md:flex-row md:pb-0 md:h-0 '
const linkStyle = 'flex px-3 py-1 hover:text-black hover:bg-white rounded-lg font-titles text-2xl transtion-all duration-300 '
const lionHead = 'h-20 rounded-full md:hidden lg:flex lg:ml-32'
const shopLink = 'text-2xl px-4 py-2 mt-2 bg-green-900 rounded-lg tracking-wider transition-all duration-200 hover:bg-green-600 md:mt-0 md:ml-2  '


const [openMenu, setOpenMenu] = useState(false)

function toggleMenu() {
  setOpenMenu(!openMenu)
}
    

  return (
    <nav className={navStyle}>
        <Link to='/' className='hidden md:flex h-16'><img src={logo} alt="rogue beard oil logo" /></Link>
        <Link to='/'><img src={headLogo} alt="lion head" className={lionHead}/></Link>


        <div onClick={toggleMenu} className={hambmburger}>{openMenu ? <IoCloseSharp size={32} /> : <FaBars size={28} />}</div>

        <div className={openMenu ? menuOpen : 'hidden md:flex'}>

          <ul className={linkListStyle}>          
          <div className='w-full py-3 md:hidden'><hr className='bg-white text-white' /></div>

            <li ><NavLink className={linkStyle} to='/'>Home</NavLink></li>
            <li><NavLink className={linkStyle} to='/about'>About</NavLink></li>
            <li><NavLink className={linkStyle} to='/contact'>Contact</NavLink></li>
            <li><NavLink className={linkStyle} to='/products'>Products</NavLink></li>
            <a className={shopLink} href="/">Shop</a>
          </ul>
        </div>
    </nav>
  )
}
