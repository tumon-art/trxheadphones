import Home from "../comps/Home";

import { client } from "../lib/client";

export interface ProductsTypes {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  details: string;
  image: [[Object], [Object], [Object]];
  model: string;
  name: string;
  price: number;
  slug: { _type: string; current: string };
}

export interface BannerDataTypes {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  buttonText: string;
  desc: string;
  discount: string;
  image: { _type: string; asset: [Object] };
  largeText1: string;
  midText: string;
  product: string;
  saleTime: string;
}
export default function index({
  products,
  bannerData,
}: {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}) {
  return (
    <>
      <Home products={products} bannerData={bannerData} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
