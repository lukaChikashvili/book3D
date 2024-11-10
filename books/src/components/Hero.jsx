import { ChevronsRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex items-center justify-start w-full h-screen p-12'>
      <div className='flex flex-col gap-6 w-1/2 '>
      <h1 className='text-8xl '>Find Stories that Speak to You</h1>
      <p className='text-2xl'>
      Dive into worlds unknown, meet unforgettable characters, and explore ideas that challenge and inspire. Start your journey here.
      </p>
      <div className='flex gap-6'>
     <button className='w-56 flex items-center gap-4 bg-gold-gradient  text-white cursor-pointer px-4 py-1.5   rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.25)]  transition-all duration-300 hover:-translate-y-[3px]  '><ChevronsRight />Explore our collection</button>
     <button className='w-56 flex items-center gap-4 bg-gold-gradient  text-white cursor-pointer px-4 py-1.5  rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.25)]  transition-all duration-300  hover:-translate-y-[3px]'><ChevronsRight />About us</button>
     </div>
      </div>
    </div>
  )
}

export default Hero
