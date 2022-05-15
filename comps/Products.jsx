import Link from "next/link"
import { urlFor } from "../lib/client"

const Products = ({ products: { image, name, slug, price } }) => {
  return (
    <div className="grid justify-center ">

      <div className=" rounded-md overflow-hidden bg-gray-300 h-28 w-28">

        {/* === IMAGE */}
        <Link href={`product/${slug.current}`}>
          <img src={urlFor(image && image[0])} alt='hoverboard'
            className='object-cover hover:scale-90 transition duration-300 '
          />
        </Link>

      </div>

      {/* === NAME & PRICE */}
      <nav className="mx-1">
        <p> {name} </p>
        <b> ${price} </b>
      </nav>

    </div>
  )
}

export default Products