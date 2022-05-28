import Link from 'next/link'
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../lib/client'

const MainBanner = ({ banner }) => {
  const imageProps = useNextSanityImage(
		client,
		banner.image
	);
  
  return (
    <main className=' md:mx-20 md:rounded-xl md:h-64 md:mb-8
     shadow-gray-400
   relative shadow-sm h-60 lg:h-80 pl-4 my-2 bg-gray-300 md:px-10
    '>

      <section className='flex flex-col' >

        <div className='mt-10'>
          <p className=' font-bold text-lg'>
            {banner.discount}
          </p>
          <h3 className='drop-shadow-lg md:text-4xl text-2xl font-sans font-extrabold'>
            {banner.midText}
          </h3>

          <h1 className='drop-shadow-lg md:text-7xl text-5xl font-sans 
            animate-pulse pt-3
            font-extrabold text-zinc-50'>
            {/* {banner.largeText1} */}
            NOW!
          </h1>
        </div>

        {/* === MAIN IMAGE  */}

        <div className='drop-shadow-2xl absolute w-48 sm:self-center
          lg:w-[340px] sm:w-60 self-end pt-10 sm:pt-0 lg:self-center'>
        <Img className=' hover:scale-110 transition' 
        {...imageProps} layout='responsive' />
        </div>

        <Link href={`/product/${banner.product}`}>
          <a className=' mt-4 sm:mt-6 md:mt-4 lg:mt-10 text-center
           shadow-lg font-extrabold shadow-red-400
           w-32 bg-red-700 text-white px-4 rounded-lg py-1'>
            {banner.buttonText}
          </a>
        </Link>

        <div className=' absolute right-10 bottom-10'>
          <h4 className='hidden lg:block text-cyan-900 text-md font-extrabold'>
            Description
          </h4>
          <h4 className='hidden lg:block text-zinc-500'>
            {banner.desc}
          </h4>
        </div>
      </section>

    </main>
  )
}

export default MainBanner
