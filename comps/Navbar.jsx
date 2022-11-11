import Link from "next/link";
import { useContext } from "react";
import { UC } from "../context/UC";
import Cart from "./Cart";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { showCart, setshowCart, totalQuantities } = useContext(UC);

  const notify = () => toast.error("Not Ready Yet!");

  return (
    <div className=" border-zinc-500 mt-1 px-1 sm:my-1  md:mx-4 flex justify-between">
      <h3 className=" self-end">
        <Link href="/">
          <div className=" flex items-end font-mono text-zinc-700 font-bold ">
            TRX Headphones
            <svg
              className=" h-6 ml-1 w-auto"
              viewBox="0 0 24 26"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
            >
              <path
                d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 
              -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667
              1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"
              />
            </svg>
          </div>
        </Link>
      </h3>

      <div className="flex gap-4">
        <svg
          onClick={notify}
          className="h-6 w-6 text-zinc-600
           hover:text-green-600 cursor-pointer transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          {" "}
          <title> Demo </title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 
          4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <Toaster />
        <svg
          onClick={notify}
          className="h-6 w-6 text-zinc-600
           hover:text-green-600 cursor-pointer transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {" "}
          <title> Demo </title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {/* === CART LOGO  */}
        <button
          className=" relative  w-8 flex"
          onClick={() => setshowCart(true)}
        >
          <svg
            className="h-6 w-6 text-gray-600 
            hover:text-green-600 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {" "}
            <title> Show Cart Items</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span
            className=" bg-green-800 rounded-full absolute  text-white h-4 w-4 text-[10px]
        font-semibold font-mono grid items-center left-[-6px] "
          >
            {totalQuantities}
          </span>
        </button>
      </div>
      {/* === SHOW CART */}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
