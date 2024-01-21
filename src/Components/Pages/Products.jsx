import React from 'react'
import { Link } from 'react-router-dom'
import beachDay from '/src/assets/photos/beach-day-white.jpg'
import forestBlend from '/src/assets/photos/forest-blend-white.jpg'


export const Products = () => {

  const article = 'pt-10'
  const beach = 'bg-[url("../images/beach.jpg")] h-fit xl:h-dvh bg-cover flex flex-col justify-center items-center pt-10 pb-10'
  const forest = 'bg-[url("../images/forest-products.jpg")] h-fit xl:h-dvh bg-cover flex flex-col justify-center items-center pt-10 pb-10'
  const oilCon = 'w-11/12 h-fit  rounded-md mx-4 mt-4 py-7 flex flex-col items-center justify-evenly lg:flex-row lg:w-4/5 lg:mx-0 lg:px-10 lg:h-2/3'
  const imageCon = 'flex flex-col items-center flex flex-col justify-between h-full'
  const images = 'w-2/3 rounded-md md:w-1/4 lg:h-96 lg:w-auto '
  const title = 'font-titles text-black text-3xl underline '
  const textCon = 'flex flex-col items-center mt-4 lg:m-auto lg:w-[60%] bg-black/50 rounded-md'
  const text = 'lg:text-2xl text-white font-semibold px-5 text-center py-7  '
  const link = 'px-7 py-2 bg-green-900 text-white border-2 border-black rounded-md mt-4 font-titles text-3xl'

 

  return (
    <article className={article}>
      <section className={beach}>
        <div className={oilCon}>
        <div className={imageCon}>
          <h1 className={title}>BEACH BLEND</h1>
          <img className={images} src={beachDay} alt="picture of a bottle of beach day beard oil with white background" />
          <Link className={link} to='/shop'>BUY NOW</Link>
        </div>
          <div className={textCon}>
            <p className={text}>
              Dive into the ultimate beachside bliss with our &quot;Beach Day&quot; beard oil blend!
              Envelop yourself in the soothing caress of sandalwood, reminiscent of warm,
              sun-kissed shores. Lavender adds a touch of relaxation as if you&#39;re lounging on a
              hammock under swaying palm trees. The zesty notes of lemon transport you to a
              tropical paradise, where each strand of your beard is kissed by the ocean
              breeze. It&#39;s like a vacation for your facial follicles! Embrace the laid-back vibes,
              and let your beard be the symbol of your endless summer. &quot;Beach Day&quot; blend –
              because who says your beard can&#39;t have its own day in the sun?
            </p>
            
          </div>
          
        </div>

        <a className='hidden' href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
      </section>

      <section className={forest}>
        
        <div className={oilCon}>

        <div className={imageCon}>
        <h1 className={title}>FOREST BLEND</h1>
         <img className={images} src={forestBlend} alt="picture of forest blend beard oil on a white background" />
         <Link className={link} to='/shop'>BUY NOW</Link>
         </div>
          <div className={textCon}>
            <p className={text}>Introducing our &quot;Forest Blend&quot; beard oil, the secret potion to transform your facial
                                fuzz into a wilderness wonder! Crafted with the essence of majestic cedarwood
                                and aromatic pine, this blend brings the rugged charm of the great outdoors to
                                your beard. Picture yourself strolling through an enchanted forest, where every
                                strand is infused with the scent of adventure. Our concoction of grapeseed and
                                coconut oils ensures your beard stays as soft as a woodland breeze, making you
                                the bearded bard of the wilderness. Embrace the untamed allure of the wild with
                                our Forest Blend – because your beard deserves a touch of nature&#39;s mischievous
                                charm!
            </p>
           
          </div>
          
        </div>
      </section>
    </article>
  )
}
