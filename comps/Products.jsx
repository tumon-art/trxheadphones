import Link from "next/link"
import { client } from "../lib/client"
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

const Products = ({ products, gap }) => {

  const imageProps = useNextSanityImage(
		client,
		products.image[0]
	);


  return (
    <div className={` ${gap} grid justify-center hover:scale-105 transition my-5 `}>


      <div className=" cursor-pointer
       rounded-md  bg-gray-300 h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56">
        {/* === IMAGE */}
        <Link href={`/product/${products.slug.current}`}>
        <Img className=" object-cover" alt="headphone" {...imageProps} layout='responsive' />
        </Link>
      </div>
      


      {/* === NAME & PRICE */}
      <section className=" mx-2 flex mt-2 justify-between">
        <nav className=" text-sm font-medium">
          <p> {products.name} </p>
          <b> ${products.price} </b>
        </nav>

      </section>

    </div>
  )
}

export default Products