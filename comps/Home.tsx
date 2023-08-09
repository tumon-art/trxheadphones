"use client";
import { useState } from "react";
import { BannerDataTypes, ProductsTypes } from "../app/page";
import FooterBanner from "../comps/FooterBanner";
import MainBanner from "./MainBanner";
import Products from "../app/Products";

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  // USE STATE TO SORT
  const [sort, setsort] = useState("");

  // SORT LOW TO HIGH
  const lowToHigh = () =>
    products.sort(
      (a, b) => parseFloat(a.price.toString()) - parseFloat(b.price.toString())
    );

  // SORT HIGH TO LOW
  const highToLow = () =>
    products.sort(
      (a, b) => parseFloat(b.price.toString()) - parseFloat(a.price.toString())
    );

  // SELECT HANDLE
  const selectHandle = (e: any) => {
    const value = e.target.value;

    // SET STATES
    if (value == "lowToHigh") setsort("lowToHigh");
    if (value == "highToLow") setsort("highToLow");
  };

  // CALL SORT FUNCTIONS
  if (sort == "lowToHigh") lowToHigh();
  if (sort == "highToLow") highToLow();

  return (
    <main>
      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData[0]} />

      <div className="flex justify-between md:mx-20">
        <div> </div>
        <select
          className=" outline-none focus:ring-1
          focus:ring-lightGray rounded-sm bg-lightDim1 text-lightGray text-xs"
          defaultValue=""
          onChange={selectHandle}
        >
          <option disabled value="">
            Sort Products
          </option>
          <option value={"lowToHigh"}> Low To High </option>
          <option value={"highToLow"}> High To Low </option>
        </select>
      </div>

      <section className="  mb-4 flex items-center flex-col">
        <h1
          className=" headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl"
        >
          Best Selling Headphones
        </h1>
        {/* <p className=" text-base text-secondary">Best in the Market</p> */}
      </section>

      {/* === SHOW PRODUCTS  */}
      <section
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
       lg:mx-20 overflow-hidden
      "
      >
        {/* === MAP PRODUCTS  */}
        {products?.map((products: ProductsTypes) => {
          return <Products key={products._id} products={products} />;
        })}
      </section>

      {/* ==== FOOTER BANNER  */}
      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;
