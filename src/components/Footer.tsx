import React from 'react'
import Link from 'next/link'
import Footer from '@/types/footerTypes'

const Footer = ({ dictionary }: { dictionary: Footer }) => {
  return (
    <footer className='bg-main dark:text-secondary text-text p-12 grid grid-cols-12'>
      <main className='col-span-12 mb-4 md:col-span-6 md:px-8'>
        <h1 className='text-3xl my-4 font-bold'>
          {dictionary.title}
        </h1>
        <p className='text-xl'>
          {dictionary.description}
        </p>
      </main>
      <aside className='col-span-12 my-4 md:col-span-6 md:px-8'>
        <h1 className='text-2xl my-4 font-bold'>
          {dictionary.explore}
        </h1>
        <nav className='font-bold my-4 flex flex-col md:text-xl md:font-normal'>
          <Link href={'/'} className='md:my-1 ms-4 hover:font-bold'>{dictionary.links.about}</Link>
          <Link href={'/'} className='md:my-1 ms-4 hover:font-bold'>{dictionary.links.projects}</Link>
          <Link href={'/'} className='md:my-1 ms-4 hover:font-bold'>{dictionary.links.skills}</Link>
          <Link href={'/'} className='md:my-1 ms-4 hover:font-bold'>{dictionary.links.contact}</Link>
        </nav>
      </aside>
      <aside className='col-span-12 my-4 md:col-span-6 md:px-8'>
        <h1 className='text-2xl my-4 font-bold'>
          {dictionary.data}
        </h1>
        <p className='text-lg md:text-xl'>
          {dictionary.dataDescription}
        </p>
        <div className="flex justify-around my-4 md:my-8">
          <figure className='w-12 h-12 bg-primary'></figure>
          <figure className='w-12 h-12 bg-primary'></figure>
          <figure className='w-12 h-12 bg-primary'></figure>
          <figure className='w-12 h-12 bg-primary'></figure>
        </div>
      </aside>
      <aside className='col-span-12 my-4 md:col-span-6 md:px-8'>
        <h1 className='text-2xl my-4 font-bold'>
          {dictionary.email}
        </h1>
        <form action="">
          <input type="text" placeholder={dictionary.form.address} className='p-4 bg-inherit w-full outline-none border-b-2 border-primary placeholder:text-secondary md:w-2/5 md:mx-2'/>
          <input type="text" placeholder={dictionary.form.subject} className='p-4 bg-inherit w-full outline-none border-b-2 border-primary placeholder:text-secondary md:w-2/5 md:mx-2'/>
          <textarea placeholder={dictionary.form.message} className='block w-full p-4 bg-inherit outline-none placeholder:text-secondary border-b-2 border-primary'/>
          <button type='submit' className='block w-full my-4 p-4 bg-secondary dark:text-main text-text md:w-1/2'>
            {dictionary.form.send}
          </button>
        </form>
      </aside>
    </footer>
  )
}

export default Footer