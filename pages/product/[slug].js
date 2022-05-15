
import { client, urlFor } from "../../lib/client"



const ProductDetails = ({ product, products }) => {
    console.log(product)
    const { image, name, details, price } = product;

    return (
        <>
            <div>
                <div className=' flex '>

                    {/* === IMAGE  */}
                    <div  >
                        <img className=' h-96 w-auto bg-red-400' src={urlFor(image && image[0])} />
                    </div>

                    {/* === PRODUCT DETAILS & REVIEWS */}
                    <div>
                        <h1> {name} </h1>
                    </div>

                </div>
            </div>
        </>
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