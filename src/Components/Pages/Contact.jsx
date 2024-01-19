import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import lionBlack from '/src/assets/photos/lion-head-oil.jpg'
import lionWhite from '/src/assets/photos/lion-head-white.jpg'

export const Contact = () => {

  const articleStyle = ' flex flex-col pt-24 lg:flex-row'
  const sectionStyleOne = 'lg:w-1/2 py-6 h-fit md:h-dvh bg-white flex flex-col items-center pt-6'
  const imageStyle = 'w-40 rounded-full'
  const textBox = 'flex flex-col items-center pt-7'
  const title = ' font-titles text-3xl'
  const text = 'pt-6'
  
  const sectionStyleTwo = 'lg:w-1/2 h-fit md:h-dvh py-6 bg-black flex flex-col items-center pt-6'
  const formBox = 'flex flex-col '
  const label = 'text-white'
  const input = 'mb-5'
  const submit = 'bg-white text-black rounded-md mt-8 '
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1k7zdk7', 'template_pp5eu3j', form.current, 'Ngx_CAl6X1vNUbben')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <article className={articleStyle}>
      <section className={sectionStyleOne}>
        <img className={imageStyle} src={lionWhite} alt="lion head logo in black" />
        <div className={textBox}>
          <h1 className={title}>CONTACT</h1>
          <h2 className={text}>Thomas Quinn</h2>
          <h2 className={text}>Email</h2> <p>Roguebeardoil24@gmail.com</p>
          <h2 className={text}>Phone</h2> <p>(603) 285-5720</p>

        </div>
      </section>

      <section className={sectionStyleTwo}>
        <img className={imageStyle} src={lionBlack} alt="lion head logo in white" />
       
        
        <form className={formBox} ref={form} onSubmit={sendEmail}>

          <label className={label}>Name</label>
          <input className={input} type="text" name="user_name" />

          <label className={label}>Email</label>
          <input className={input} type="email" name="user_email" />

          <label className={label}>Message</label>
          <textarea className='h-24' name="message" />

          <input className={submit} type="submit" value="Send" />
        </form>
        
      </section>
    </article>
  )
}
