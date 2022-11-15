import Link from "next/link";
import { client } from "../lib/client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { ProductsTypes } from "./page";
import { useEffect, useState } from "react";

interface ProductsProps {
  products: ProductsTypes;
  gap?: string;
}

const Products = ({ products, gap }: ProductsProps) => {
  const [isLoaded, setIsloaded] = useState<boolean>(false);

  //  UPDATE THE COMP TO SHOW FAV
  const [update, setUpdate] = useState<boolean>(false);

  const imageProps = useNextSanityImage(client, products.image[0]);

  useEffect(() => {
    setIsloaded(true);
  }, []);
  const saveToLocalS = (product: ProductsTypes) => {
    if (localStorage.trxfav) {
      if (
        JSON.parse(localStorage.trxfav).filter(
          (each: ProductsTypes) => each._id == product._id
        ).length >= 1
      ) {
        const filterd = JSON.parse(localStorage.trxfav).filter(
          (each: ProductsTypes) => each._id != product._id
        );
        localStorage.setItem("trxfav", JSON.stringify(filterd));
      } else {
        localStorage.setItem(
          "trxfav",
          JSON.stringify([...JSON.parse(localStorage.trxfav), product])
        );
      }
    } else {
      localStorage.setItem("trxfav", JSON.stringify([product]));
    }
  };

  return (
    <div
      className={` ${gap} grid justify-center hover:scale-105
     transition my-5 `}
    >
      <div
        className="cursor-pointer shadow-sm shadow-lightDim overflow-hidden
            rounded-md  bg-lightDim h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56"
      >
        {/* === IMAGE */}
        <Link href={`/product/${products.slug.current}`}>
          <Img className="object-cover" alt="headphone" {...imageProps} />
        </Link>
      </div>

      {/* === NAME & PRICE */}
      <section className=" mx-1 sm:mx-2 flex mt-2 items-center justify-between">
        <nav className=" text-sm font-normal sm:font-medium">
          <p> {products.name} </p>
          <b> ${products.price} </b>
        </nav>

        {/* === FAV ICON */}
        {isLoaded && (
          <svg
            onClick={() => {
              saveToLocalS(products);
              setUpdate((p) => !p);
            }}
            className={`h-6 sm:h-10 self-start hover:bg-lightLove
          sm:hover:fill-love transition-colors
          duration-1000 text-lightDim1 z-10 ${
            global.localStorage.trxfav &&
            JSON.parse(localStorage.trxfav).filter(
              (each: ProductsTypes) => each._id == products._id
            ).length >= 1 &&
            "fill-love"
          }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <title> Add To Favorite</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5
          4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )}
      </section>
    </div>
  );
};

export default Products;