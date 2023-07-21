import React from 'react'

const Contact = () => {
  return (
    <section className='py-10 dark:bg-secondary bg-main text-text'>
      <h1 className='text-3xl my-8 dark:text-main text-center font-bold'>Get In Touch!</h1>
      <main className='grid grid-cols-12 px-8 my-10'>
        <aside className='col-span-12 flex justify-center md:order-2 md:col-span-4 lg:col-start-8 lg:col-end-11'>
          <figure className='w-60 h-60 mb-8 rounded-full dark:bg-main bg-text'>
          </figure>
        </aside>
        <p className='col-span-12 px-4 text-center md:col-span-8 md:flex md:items-center md:text-start md:text-2xl lg:col-start-3 lg:col-end-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis doloremque ipsam omnis tempora recusandae, facere possimus, aut quaerat impedit ducimus, necessitatibus ut nam minus perferendis suscipit! Magnam, esse perspiciatis!
        </p>
      </main>
    </section>
  )
}

export default Contact