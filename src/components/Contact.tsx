import React from 'react'
import { Contact } from '@/types/contactTypes'
import ContactClient from './ContactClient'

const Contact = ({ dictionary }: { dictionary: Contact }) => {
  return (
    <section id='contact' className='py-10 dark:bg-secondary bg-text dark:text-text text-primary'>
      <h1 className='text-3xl my-8 text-main text-center font-bold'>
        {dictionary.title}
      </h1>
      <main className='max-w-5xl mx-auto grid grid-cols-12 px-8 my-10'>
        <ContactClient description={dictionary.description} email={dictionary.email} />
      </main>
    </section>
  )
}

export default Contact