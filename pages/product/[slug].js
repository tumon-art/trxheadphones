import React, { useState } from 'react';
import { AiFillBell, AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import Marquee from '../../comps/Marquee';
import { client, urlFor } from "../../lib/client"
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';




const ProductDetails = ({ product, products }) => {
    // const { image, name, details, price } = product;
   
    // USE STATES
    const [index, setindex] = useState(0)

    const imageProps = useNextSanityImage(
        client,
        product.image[index]
    );


    return (
        <div className=' sm:px-10 py-10'>
            <div>
                <div className=' sm:flex '>

                    {/* === IMAGE  */}
                    <div className=' grid sm:block justify-center '>

                        <img className=' object-cover
                        hover:bg-red-600 transition duration-300
                        h-64 w-auto lg:h-96
                        bg-zinc-300 sm:rounded-2xl'
                            src={urlFor(product.image && product.image[index])}
                        />


                        {/* === MORE IMAGES */}
                        <div className='flex ml-2 sm:ml-0'>
                            {product.image.map((e, i) => (
                                    <img key={i}
                                    src={urlFor(e)}
                                    className='h-14 bg-zinc-300 mt-4 mr-4 
                                    transition duration-200
                                    hover:bg-red-600 rounded-xl w-auto'
                                    onMouseOver={() => setindex(i)}
                                />
                                ))}

                    
                        </div>
                    </div>




                    <section className='  mt-10 sm:mt-0 text-red-600 sm:ml-10'>

                        <div className=' ml-2'>
                            {/* === PRODUCT DETAILS & REVIEWS */}
                            <h1 className=' text-sky-900 text-xl font-semibold'> {product.model} </h1>
                            <div className='flex my-2'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <span className=' text-zinc-500 text-sm mx-1'> (9) </span>
                            </div>

                            <div className=' text-sky-900 font-medium'>
                                DETAILS:
                            </div>
                            <p className='md:w-1/3 text-zinc-600'> {product.details}</p>

                            <div className=' my-4 text-2xl font-bold'> ${product.price} </div>

                            {/* ==== QUANTITY SHOW  */}
                            <div className='flex'>
                                <h3 className='text-sky-900 font-semibold'> Quantity:</h3>

                                <div className=' w-32 ring-gray-400 
                            flex justify-center items-center ring-1 ml-4 px-4'>

                                    <span className='hover:scale-150 transition mx-2'>
                                        <AiOutlineMinus />
                                    </span>
                                    <p className=' font-medium text-gray-800
                             mx-2 border-r-2 border-gray-400 my-1 border-l-2 px-4'> 0 </p>
                                    <span className=' hover:scale-150 transition text-green-700 mx-2 '>
                                        <AiOutlinePlus />
                                    </span>

                                </div>

                            </div>
                        </div>

                        {/* ==== ADD AND BUY */}
                        <div className=' sm:flex w-full gap-4 mt-4 px-1'>
                            <div className=' text-center mb-4 sm:mb-0 hover:scale-105 transition
                             text-xl px-8 py-2 ring-1 ring-red-600
                             '>
                                Add to Cart
                            </div>

                            <div className=' text-center hover:scale-105 transition shadow-md
                            bg-red-600 text-xl px-8 py-2 text-white ring-1 ring-red-600'>
                                Buy Now
                            </div>
                        </div>

                    </section>

                </div>

                <Marquee products={products} />
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((e) => {
        return {
            params: {
                slug: e.slug.current
            }
        }
    });

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }) => {

    // QUERY 
    const oneProduct = `*[_type == "product" && slug.current == '${params.slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    // GET SINGLE PRODUCT
    const product = await client.fetch(oneProduct);

    // GET RELATED PRODUCTS
    const products = await client.fetch(productsQuery);

    return {
        props: { product, products }
    }
}


export default ProductDetails