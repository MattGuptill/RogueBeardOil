import React from 'react'
import { Link } from 'react-router-dom'
import forestBlend from '/src/assets/photos/oil-forest-blend.jpg'

export default function Bottom() {

    const articleStyle = 'h-fit lg:h-dvh py-10 flex flex-col justify-evenly items-center bg-black text-white lg:flex-row lg:justify-between lg:px-20'
    const photoStyle = 'h-80 lg:hidden xl:flex xl:h-1/2 rounded-full'
    const textStyle = 'text-xl w-4/5 md:text-2xl text-center pb-9'
    const linkStyle = 'bg-white text-black px-5 py-4 text-2xl rounded-md hover:bg-green-900 hover:text-white transition-all duration-200 '
    const divStyle = 'flex flex-col justify-center items-center w-11/12 py-6'

  return (
    <article className={articleStyle}>
        <img className={photoStyle} src={forestBlend} alt="two small bottles of forest blend beard oil" />      
        <div className={divStyle}>
            <h2 className={textStyle} >
              Embark on a follicular journey with our beard oils, born from a passion for
              healthy, thriving beards. Behind every drop of our meticulously crafted blends is a
              tale of dedication and years spent perfecting the alchemy of grooming. As a
              beard enthusiast, I&#39;ve delved deep into the art and science of creating the perfect
              recipes to nourish and elevate your facial masterpiece. Each blend is a labor of
              love, a symphony of carefully selected ingredients that I&#39;ve studied and tested to
              perfection. Join the brotherhood of well-groomed beards, and let our journey to
              beard greatness be yours too. Because behind every great beard, there&#39;s an
              even greater story – yours, embraced by our carefully curated elixirs. Welcome to
              the world of our beard oil legacy!
            </h2>
            <Link className={linkStyle} to='/contact'>CONTACT</Link>
        </div>  
    </article>
  )
}