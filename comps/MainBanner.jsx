import Link from 'next/link'

import { urlFor } from '../lib/client'

const MainBanner = ({banner}) => {
  
  return (
   <main className=' md:mx-20 md:rounded-xl md:h-64 md:mb-8
   relative h-60 px-4 py-8 bg-gray-300 md:px-10
    '>

    <section className=' flex flex-col' >
      <p className=' font-bold text-lg'>
      {banner.discount}
      </p>
      <h3 className=' drop-shadow-lg md:text-4xl text-2xl font-sans font-extrabold'>
      {banner.midText}
      </h3>

      <h1 className=' drop-shadow-lg md:text-7xl text-5xl font-sans 
      animate-pulse pt-3
      font-extrabold text-zinc-50'>
      {/* {banner.largeText1} */}
      NOW!
      </h1>

      {/* === MAIN IMAGE  */}
      <img 
      className=' drop-shadow-2xl absolute w-48  sm:w-60 self-end md:self-center'
      src={urlFor(banner.image)} alt="hoverboard" 
      />
      
      <Link href={`products/${banner.product}`}>
      <button className='absolute shadow-lg font-extrabold shadow-red-400 bottom-4 w-32 bg-red-700 text-white px-4 rounded-lg py-1'>
      {banner.buttonText}
      </button>
      </Link>

      <div className=' self-end'>
        <h4 className='hidden lg:block text-cyan-900 text-md font-extrabold'>
          Description
        </h4>
        <h4 className=' hidden lg:block text-zinc-500'>
        {banner.desc} 
        </h4>
      </div>
    </section>

   </main>
  )
}

export default MainBanner