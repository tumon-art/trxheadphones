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
    totalQuantities
  } = useContext(UC)

  return (
   <div className='
   bg-gray-700 bg-opacity-50 w-full h-full fixed z-50 right-0 top-0'
   ref={cartRef} >

     <div className=' pt-8 pl-4 float-right h-full transition-all duration-500
      bg-white w-full md:w-2/4 lg:w-2/5'>

       <button className='flex gap-2 items-center text-lg'
       onClick={()=> setshowCart(false)}>
         <AiOutlineLeft className='text-2xl' />
         <span> Your Cart </span>
         <span className=' text-red-600'>
            ({totalQuantities} items)
         </span>
       </button>

       { cartItems.length < 1 && (
         <section className='flex flex-col items-center my-8'>

           {/* === SHOPING BAG ICON  */}
           <AiOutlineShopping size={150} />
           <h3 className='mt-4 font-bold text-lg'>
           Your shopping bag is empty
           </h3>

           {/* === BUTTON  */}
           <button className=' rounded-lg py-2 px-14
           text-lg bg-red-600 text-white mt-8 '>
             Continue Shopping
           </button>
         </section>
       )}

     </div>

   </div>
  )
}

export default Cart