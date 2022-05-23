import Link from 'next/link'
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from "../lib/client"

const FooterBanner = ({ bannerData }) => {

  const imageProps = useNextSanityImage(
    client,
    bannerData.image
  );

  return (

    <main className='md:mx-20 md:rounded-3xl md:h-64 md:mb-8 relative
     h-60 lg:h-[340px] pl-4 my-10 bg-red-600 md:px-10 '>

      <section className='flex flex-col' >

        <div className='mt-10 lg:mt-20'>
          <p className=' font-bold text-lg text-white'>
            {bannerData.discount}
          </p>
          <h3 className='drop-shadow-lg text-white
          md:text-4xl text-2xl font-sans font-extrabold'>
            {bannerData.midText}
          </h3>

          <h1 className='drop-shadow-lg md:text-7xl text-5xl font-sans 
            animate-pulse pt-3
            font-extrabold text-zinc-50'>
            {/* {banner.largeText1} */}
            NOW!
          </h1>
        </div>

        {/* === MAIN IMAGE  */}
        <div className='drop-shadow-2xl absolute top-10 
        sm:top-0 w-48 md:self-center lg:w-[400px]
        hover:scale-125 lg:top-[-58px] sm:w-60
        self-end z-10 lg:self-center transition'>

          <Img {...imageProps} layout='responsive' />
          
        </div>

        <p className=' text-zinc-50 text-lg font- mt-4 hidden lg:block ml-2'>
          {bannerData.saleTime}!
        </p>

        <Link href={`/product/${bannerData.product}`}>
          <a className=' lg:absolute lg:right-8 lg:bottom-10
            mt-4 sm:mt-6 md:mt-4 lg:mt-10 text-center
            font-extrabold hover:scale-110 transition
            w-32 bg-zinc-50 text-red-600 px-4 rounded-lg py-1'>
            {bannerData.buttonText}
          </a>
        </Link>

        <p className=' hidden md:block md:text-2xl md:top-20 text-center text-white font-extrabold lg:text-4xl font-sans absolute right-10 top-10'>
          STUNNING <span className=' text-zinc-400 '> SOUND </span> <br></br> & <br></br> TOTAL COMFORT
        </p>
      </section>

    </main>

  )
}

export default FooterBanner
