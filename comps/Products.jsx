import Link from "next/link"
import { urlFor } from "../lib/client"

const Products = ({ products: { image, name, slug, price } }) => {
  return (
    <div className="grid justify-center my-5 ">
      <div className=" rounded-md overflow-hidden bg-gray-300 h-80 w-80 sm:h-40 sm:w-40 lg:h-56 lg:w-56">


        {/* === IMAGE */}
        <Link href={`product/${slug.current}`}>
          <img src={urlFor(image && image[0])} alt='hoverboard'
            className='object-cover hover:scale-90 transition duration-300 '
          />
        </Link>

      </div>

      {/* === NAME & PRICE */}
      <nav className="mx-2">
        <p> {name} </p>
        <b> ${price} </b>
      </nav>

    </div>
  )
}

export default Products