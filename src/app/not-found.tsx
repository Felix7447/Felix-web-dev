import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen bg-primary flex flex-col justify-center items-center gap-4'>
      <h2 className='text-5xl text-center text-main'>404 Not Found</h2>
      <p className='text-2xl'>Sorry, could not find requested resource</p>
      <p className='text-2xl'>
        Please go back to my <Link href="/portfolio" className='text-main font-bold underline'>Portfolio</Link>
      </p>
    </div>
  )
}