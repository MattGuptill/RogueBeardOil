import React from 'react'
import { Link } from 'react-router-dom'
import forestBlend from 'src/assets/photos/oil-forest-blend.jpg'

export default function Bottom() {

    const articleStyle = 'h-dvh flex flex-col justify-evenly items-center bg-black text-white lg:flex-row lg:justify-between lg:px-20'
    const photoStyle = 'h-80 xl:h-1/2 rounded-full'
    const textStyle = 'text-xl w-4/5 md:text-3xl text-center pb-8'
    const linkStyle = 'bg-white text-black px-5 py-4 text-2xl'
    const divStyle = 'flex flex-col justify-center items-center w-11/12 pb-4'

  return (
    <article className={articleStyle}>
        <img className={photoStyle} src="\images\oil-forest-blend.jpg" alt="two small bottles of forest blend beard oil" />      
        <div className={divStyle}>
            <h2 className={textStyle} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quaerat sunt incidunt? Quos, ex. Cum consequuntur ab ut exercitationem consequatur. Sequi, esse. Voluptatem debitis ullam culpa optio? Repudiandae, nam quos?</h2>
            <Link className={linkStyle} to='/contact'>CONTACT</Link>
        </div>  
    </article>
  )
}