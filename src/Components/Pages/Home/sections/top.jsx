import React from 'react'
import { Link } from 'react-router-dom'




export default function Top() {
    
    
    const articleStyle = "bg-[url('../images/forest.jpg')] h-dvh bg-cover flex justify-center items-center"
    const textConStyle = "w-11/12 flex flex-col text-center pt-20 items-center "
    const titleStyle = "text-6xl font-titles md:text-8xl pb-10"
    // const textStyle = 'text-lg md:text-3xl bg-black text-white w-fit '

  return (
    <article className={articleStyle}>
        <div className={textConStyle}>
            <h1 className={titleStyle}>TAKE YOUR BEARD TO THE NEXT LEVEL</h1>
            {/* <Link to='/products' className={textStyle}>GROW A <u>BEARD</u> THEY SAID, IT WOULD BE <u>FUN</u> THEY SAID...<u>AND IT WAS!</u></Link> */}
        </div>
    </article>
  )
}
