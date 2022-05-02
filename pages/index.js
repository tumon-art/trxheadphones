import Head from 'next/head'
import Footer from '../comps/Footer'
import Header from '../comps/Header'
import Home from '../comps/Home'

import { client } from '../lib/client'

export default function index({products, bannerData }) {

  return (
    <div>
      <Head>
        <title> Cat House </title>
        <meta name="description" content=" This is Cat's World!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Home products={products} bannerData={bannerData} />
      {/* <Header />
      <Footer /> */}

    </div>
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
