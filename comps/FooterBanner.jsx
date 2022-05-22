import Link from 'next/link'
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from "../lib/client"

const FooterBanner = ({bannerData}) => {
  console.log(bannerData)
  const imageProps = useNextSanityImage(
		client,
		bannerData.image
	);

  return (
   <>
    <main className='md:mx-20 md:rounded-3xl md:h-64 md:mb-8
   relative h-60 lg:h-[340px] pl-4 my-10 bg-red-600 md:px-10
    '>

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

        <div className='drop-shadow-2xl absolute w-48 sm:self-center
          lg:w-[400px] lg:top-[-58px] sm:w-60 self-end lg:self-center'>
        <Img {...imageProps} layout='responsive' />
        </div>

        <p className=' text-zinc-50 text-lg font- mt-4 hidden lg:block ml-2'>
          {bannerData.saleTime}!
        </p>
        <Link href={`product/${bannerData.product}`}>
          <a className=' lg:absolute lg:right-8 lg:bottom-10
          mt-4 sm:mt-6 md:mt-4 lg:mt-10 text-center
            font-extrabold 
           w-32 bg-zinc-50 text-red-600 px-4 rounded-lg py-1'>
            {bannerData.buttonText}
          </a>
        </Link>

        {/* <div className=' absolute right-10 bottom-10'>
          <h4 className='hidden lg:block text-cyan-900 text-md font-extrabold'>
            Description
          </h4>
          <h4 className='hidden lg:block text-zinc-500'>
            {bannerData.desc}
          </h4>
        </div> */}
      </section>

    </main>
   </>
  )
}

export default FooterBanner