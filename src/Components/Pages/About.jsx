import React from 'react'
import rogueThomas from '/src/assets/photos/Rogue-Thomas.jpg'


export const About = () => {
  
  const articleStyle ='pt-20'
  const conStyle =  'h-fit py-10 flex flex-col justify-evenly items-center px-7 lg:flex-row lg: '
  const imageStyle = 'w-64 rounded-full lg:h-1/4 lg:w-1/4 border-black '
  const divStyle = 'text-center flex flex-col justify-center items-center lg:w-1/2 pt-10'
  const titleStyle = 'font-titles text-3xl underline pb-4 lg:text-5xl'
  const textStyle = 'lg:w-2/3 lg:text-2xl' 



  return (
    <article className={articleStyle}>
      <div className={conStyle}>
        <img className={imageStyle} src={rogueThomas} alt="photo of thomas quinn" />
        <div className={divStyle}>
          <h1 className={titleStyle}>FROM ONE BEARD TO ANOTHER</h1>
          <p className={textStyle}>
            I am Thomas Quinn, hailing from Dover, New Hampshire. Throughout my journey in the realm of bearded life, the aspiration to create my own line of beard oil has been a persistent dream. Drawing inspiration from scents and blends found in beard oils worldwide, I dedicated years to formulating a product that promotes the health of beards. Amid the busyness of life and the growth of my family, comprising my supportive wife and two boys, my dream has materialized into a reality.
          </p>
        </div>
      </div>


    </article>
  )
}
