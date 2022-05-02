import Link from 'next/link'

import { urlFor } from '../lib/client'

const MainBanner = ({banner}) => {
  
  return (
   <main className=' relative h-60 px-4 py-8 bg-gray-300 md:px-10'>

    <section className=' flex flex-col' >
      <p>
      {banner.discount}
      </p>
      <h3 className=' drop-shadow-lg md:text-4xl text-2xl font-sans text-cyan-900 font-extrabold'>
      {banner.midText}
      </h3>

      <h1 className=' drop-shadow-lg md:text-7xl text-5xl font-sans 
      animate-pulse pt-3
      font-extrabold text-zinc-50'>
      {banner.largeText1}
      </h1>

      <img 
      className=' absolute w-72 self-end md:self-center'
      src={urlFor(banner.image)} alt="cats" 
      />
      
      <Link href={`products/${banner.product}`}>
      <button className='absolute bottom-4 w-32 bg-red-700 text-white px-4 rounded-lg py-1'>
      {banner.buttonText}
      </button>
      </Link>

      <div className=' self-end'>
        <h4 className=' hidden md:block text-cyan-900 text-md font-extrabold'> {banner.desc} </h4>
      </div>
    </section>

   </main>
  )
}

export default MainBanner