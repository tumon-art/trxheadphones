import React, { createContext, useState } from 'react'
import { toast } from 'react-hot-toast';

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

    // ADD TO CART
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item)=> item._id === product._id);

        settotalPrice((p)=> p + product.price * quantity)
        settotalQuantities((p)=> p + quantity)

        if(checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct)=> {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
        setcartItems(updatedCartItems)

        } else {
            product.quantity = quantity;
            
            setcartItems([...cartItems, {...product}])
        }
        
        toast.success(`${qty} ${product.name} added to the cart.`);
    }
    
    return (
        <UC.Provider
            value={{
                showCart, setshowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,decQty,
                onAdd
            }}
        >
            {children}
        </UC.Provider>
    )
}