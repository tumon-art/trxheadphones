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

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  const query = '*[_type == "product"]';
  const products: ProductsTypes[] = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData: BannerDataTypes[] = await client.fetch(bannerQuery);

  return {
    products,
    bannerData,
  };
}

export default async function Page() {
  const { products, bannerData } = await getData();

  return (
    <>
      <Home products={products} bannerData={bannerData} />
    </>
  );
}