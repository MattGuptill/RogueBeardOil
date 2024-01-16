import React from 'react'




export default function Top() {
    
    
    const articleStyle = "bg-[url('../images/forest.jpg')] h-dvh bg-cover flex justify-center items-center"
    const textConStyle = "w-11/12 flex flex-col text-center pt-20  "
    const titleStyle = "text-6xl font-titles md:text-8xl pb-10"
    const textStyle = 'text-lg md:text-3xl'

  return (
    <article className={articleStyle}>
        <div className={textConStyle}>
            <h1 className={titleStyle}>TAKE YOUR BEARD TO THE NEXT LEVEL</h1>
            <p className={textStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus consectetur optio voluptatem quia eveniet asperiores, deleniti cum dolor quo, consequuntur, et repudiandae aspernatur vitae facilis ab cumque. Ducimus, tempore!</p>
        </div>
    </article>
  )
}
