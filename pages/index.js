import Home from '../comps/Home'

import { client } from '../lib/client'

export default function index({ products, bannerData }) {

  return (
    <>

      <Home products={products} bannerData={bannerData} />

    </>
  )
}

export const getServerSideProps = async () => {

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

