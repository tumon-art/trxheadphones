import Link from "next/link"
import { urlFor } from "../lib/client"

const Products = ({ products: { image, name, slug, price } }) => {
  return (
    <div className="grid  justify-center hover:scale-105 transition my-5 ">


      <div className=" cursor-pointer
       rounded-md  bg-gray-300 h-72 w-72 sm:h-40 sm:w-40 lg:h-56 lg:w-56">
        {/* === IMAGE */}
        <Link href={`/product/${slug.current}`}>
          <img src={urlFor(image && image[0])} alt='hoverboard'
            className='object-cover '
          />
        </Link>
      </div>


      {/* === NAME & PRICE */}
      <section className=" mx-2 flex mt-2 justify-between">
        <nav className="">
          <p> {name} </p>
          <b> ${price} </b>
        </nav>

        <div className=" block sm:hidden cursor-pointer hover:bg-zinc-500 hover:text-white
       rounded-md transition duration-200
       flex justify-center items-center font-semibold
        text-gray-800 ring-2 ring-zinc-400 h-8 w-20">
         Buy Now
        </div>
      </section>

    </div>
  )
}

export default Products