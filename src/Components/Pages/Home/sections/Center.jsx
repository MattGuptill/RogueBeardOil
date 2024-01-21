import React from 'react'
import { Link } from 'react-router-dom'
import rogueBeard from '/src/assets/photos/rogue-Beard.jpg'

export default function Middle () {
    
    const articleStyle = 'h-dvh flex flex-col justify-evenly items-center lg:flex-row lg:justify-between lg:px-20'
    const photoStyle = 'h-80 xl:h-1/2 rounded-full'
    const textStyle = 'text-xl w-4/5 md:text-3xl text-center pb-8'
    const linkStyle = 'bg-black text-white px-5 py-4 text-2xl rounded-md hover:bg-green-900 transition-all duration-200'
    const divStyle = 'flex flex-col justify-center items-center w-11/12 pb-4'


    return (
    <article className={articleStyle}>
            <img className={photoStyle} src={rogueBeard} alt="beach day beard oil resting on top of wood slate" />
            <div className={divStyle}>
                <h2 className={textStyle}>
                  Grow a beard they said... It will be fun they said... And they were right! Especially with this Rogue Beard Oil.
                </h2>
                <Link className={linkStyle} to='/products'>PRODUCTS</Link>
            </div>
    </article>
  )
}