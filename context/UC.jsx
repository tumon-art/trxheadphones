import React, { createContext, useState } from 'react'
import { Toast } from 'react-hot-toast';

export const UC = createContext()

export const Provider = ({ children }) => {
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [totalQuantities, settotalQuantities] = useState(0);
    const [qty, setqty] = useState(1)

    // INC QTY FUNC
    const incQty = () => setqty((p)=> p + 1);

    // DEC QTY FUNC 
    const decQty = () => {
        setqty((p)=>{
            if(p - 1 < 1) return 1;
            return p -1
        })
    } 
    
    return (
        <UC.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty
            }}
        >
            {children}
        </UC.Provider>
    )
}