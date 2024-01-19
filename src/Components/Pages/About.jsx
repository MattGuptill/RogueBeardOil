import React from 'react'
import aboutPhoto from '/src/assets/photos/oil-forest-blend.jpg'

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
        <img className={imageStyle} src={aboutPhoto} alt="photo of thomas quinn" />
        <div className={divStyle}>
          <h1 className={titleStyle}>FROM ONE BEARD TO ANOTHER</h1>
          <p className={textStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing 
          elit. Aliquam suscipit dolorem sequi rem quis at iste 
          illum, consectetur enim cupiditate non! Fuga eius aliquam
          ea accusamus nulla dolorem laborum maxime dignissimos, 
          fugit id quibusdam atque! Voluptas quos distinctio
            asperiores eaque optio voluptatibus nostrum nemo. 
            Animi impedit quis reprehenderit? Dicta, libero.</p>
        </div>
      </div>
    </article>
  )
}
