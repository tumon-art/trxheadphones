import Link from "next/link"
import { urlFor } from "../lib/client"

const Products = ({products:{image,name,slug,price}}) => {
  return (
   <div className="grid justify-center">

    <div className=" rounded-md bg-gray-400 h-28 w-28">
    <Link href={`product/${slug.current}`}>
         <img src={urlFor(image && image[0])} 
          className='object-cover'
          />
     </Link>
    </div>


    <nav className="mx-1">
    <p> {name} </p>
    <b> ${price} </b>
    </nav>

   </div>
  )
}

export default Products