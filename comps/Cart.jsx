import React, { useContext, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { UC } from '../context/UC';

import { urlFor } from '../lib/client';
const Cart = () => {
  // USE REF
  const cartRef = useRef()

  // CONTEXT STATES
  const {
    setshowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    toggleCartItemQuantity,
    onRemove
  } = useContext(UC)

  return (
    <div className='
   bg-gray-700 bg-opacity-50 w-full h-full fixed z-50 right-0 top-0'
      ref={cartRef} >

      <div className=' relative overflow-y-auto  float-right h-full transition-all duration-500
      bg-white w-full md:w-2/4 lg:w-2/5'>

        <div className=' fixed bg-red-600 h-10 flex items-center pl-1 sm:pl-4 w-full shadow-sm shadow-gray-400'>
          <button className='flex gap-2 items-center text-lg'
            onClick={() => setshowCart(false)}>
            <AiOutlineLeft className='text-2xl text-white' />
            <span className='text-white'> Your Cart </span>
            <span className=' text-white'>
              (<b> {totalQuantities}</b> items)
            </span>
          </button>
        </div>

        <section className=' pt-8 pl-1 sm:pl-4'>

          {/* === IF CART IS EMPTY  */}
          {cartItems.length < 1 && (
            <section className='flex flex-col items-center my-8'>

              {/* === SHOPING BAG ICON  */}
              <AiOutlineShopping size={150} />
              <h3 className='mt-4 font-bold text-lg'>
                Your shopping bag is empty
              </h3>

              {/* === BUTTON  */}
              <button className=' rounded-lg py-2 px-14
           text-lg bg-red-600 text-white mt-8 
            hover:scale-110 transition'
                onClick={() => setshowCart(false)}
              >
                Continue Shopping
              </button>
            </section>
          )}

          {/* === SHOW PRODUCTS IN CART */}
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id}
              className='flex mt-10 px-2'>

              <img src={urlFor(item?.image[0])}
                className=' mr-1 sm:mr-4 h-32 object-cover w-36
           bg-zinc-200 rounded-lg '
              />

              {/* ==== NAME & PRICE */}
              <div className=' grid w-full px-4'>
                <section className=' flex justify-between w-full'>
                  <h4 className=' text-xl text-cyan-900 font-bold'>
                    {item?.name}
                  </h4>
                  <h5 className=' text-xl text-cyan-900 font-bold'>
                    ${item?.price}
                  </h5>
                </section>

                <div className='flex items-center justify-between self-center'>
                  <div className=' w-32 ring-gray-400 
                  flex justify-center items-center ring-1 px-4'>

                    <span className='hover:scale-150 transition mx-2'
                      onClick={() => toggleCartItemQuantity(item._id, 'dec')}
                    >
                      <AiOutlineMinus />
                    </span>
                    <p className=' font-medium text-gray-800
                  mx-2 border-r-2 border-gray-400 my-1 border-l-2 px-4'
                    >
                      {item?.quantity}
                    </p>
                    <span className=' hover:scale-150 transition text-green-700 mx-2 '
                      onClick={() => toggleCartItemQuantity(item._id, 'inc')}
                    >
                      <AiOutlinePlus />
                    </span>

                  </div>
                  <TiDeleteOutline onClick={() => onRemove(item)}
                    className=' text-red-600 text-3xl hover:scale-110
               cursor-pointer'
                  />
                </div>
              </div>



            </div>
          ))}

          {/* === SUBTOTAL & PAY  */}
          {cartItems.length >= 1 && (
            <div className='flex flex-col items-center my-10 w-full'>

              <section className=' w-full px-10 flex items-center justify-between'>
                <h2 className=' text-2xl font-semibold'>
                  Subtotal:
                </h2>
                <span className=' text-xl font-bold'> ${totalPrice}</span>
              </section>

              <button className=' text-xl hover:scale-110 transition
            my-10 text-white bg-red-600 rounded-xl px-20 py-1'>
                PAY WITH STRIPE
              </button>

            </div>
          )}

        </section>

      </div>

    </div>
  )
}

export default Cart