import Link from "next/link"
import { urlFor } from "../lib/client"

const Products = ({ products: { image, name, slug, price }, gap }) => {
  console.log(gap)
  return (
    <div className={` ${gap} grid justify-center hover:scale-105 transition my-5 `}>


      <div className=" cursor-pointer
       rounded-md  bg-gray-300 h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56">
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

      </section>

    </div>
  )
}

export default Products