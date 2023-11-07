"use client"
import React, { FormEventHandler, useRef } from 'react'
import emailjs from '@emailjs/browser'

interface Props {
  form: {
    address: string
    subject: string
    message: string
    send: string
  }
} 

const EmailForm: React.FC<Props> = ({ form }) => {
  const formElement = useRef<HTMLFormElement | null>(null)
  const email = useRef<HTMLInputElement | null>(null)
  const subject = useRef<HTMLInputElement | null>(null)
  const message = useRef<HTMLTextAreaElement | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params = {
      email: email.current?.value,
      subject: subject.current?.value,
      message: message.current?.value,
    }

    const serviceID: any = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateID: any = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const publicKey: any = process.env.NEXT_PUBLIC_EMAILJS_KEY

    emailjs.send(serviceID, templateID, params, publicKey)
      .then(
        res => {
          formElement.current?.reset()
          alert("Email sent successfully!")
        }
      )
      .catch(error => { console.log(error) })
  }

  return (
    <form ref={formElement} onSubmit={handleSubmit}>
      <input ref={email} name="email" type="email" placeholder={form.address} className='p-4 bg-inherit w-full outline-none border-b-2 border-text dark:border-primary placeholder:text-text dark:placeholder:text-secondary md:w-2/5 md:mx-2'/>
      <input ref={subject} name="subject" type="text" placeholder={form.subject} className='p-4 bg-inherit w-full outline-none border-b-2 border-text dark:border-primary placeholder:text-text dark:placeholder:text-secondary md:w-2/5 md:mx-2'/>
      <textarea ref={message} name="message" placeholder={form.message} className='block w-full p-4 bg-inherit outline-none border-b-2 border-text dark:border-primary placeholder:text-text dark:placeholder:text-secondary md:max-w-[83%]'/>
      <button type='submit' className='block w-full my-4 p-4 bg-text text-primary duration-100 border-2 border-transparent hover:border-text hover:bg-main hover:text-text dark:bg-secondary dark:text-text dark:hover:bg-main dark:hover:text-primary dark:hover:border-primary md:w-1/2 font-bold shadow-2xl'>
        {form.send}
      </button>
    </form>
  )
}

export default EmailForm