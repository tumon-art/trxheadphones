import { AiFillBell, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { client, urlFor } from "../../lib/client"



const ProductDetails = ({ product, products }) => {
    console.log(product)
    const { image, name, details, price } = product;

    return (
        <div className=' px-10 py-10'>
            <div>
                <div className=' flex '>

                    {/* === IMAGE  */}
                    <div >
                        <img className=' h-96 w-auto bg-zinc-300 rounded-2xl' 
                        src={urlFor(image && image[0])} 
                        />
                    </div>

                    {/* === PRODUCT DETAILS & REVIEWS */}
                    <section className=' text-red-600 ml-10'>
                        <h1 className=' text-sky-900 text-xl font-semibold'> {product.model} </h1>
                        <div className='flex my-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <span className=' text-zinc-500 text-sm mx-1'> (9) </span>
                        </div>
                    </section>

                </div>
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

export const getStaticProps = async ({ params}) => {

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