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
            const foundProduct = cartItems.find((item)=> item._id === product._id)
            const newCartItems = cartItems.filter((item)=> item._id !== product._id)
            setcartItems([...newCartItems,{...foundProduct, quantity:foundProduct.quantity + quantity}])
        }
        else {
            
            product.quantity = quantity;
            setcartItems([...cartItems, {...product}])
        }
        
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    // ON REMOVE FORM CART 
    const onRemove = (product) => {
        const foundProduct = cartItems.find((item)=> product._id === item._id )
        const newCartItems = cartItems.filter((item)=> item._id !== product._id)

        settotalPrice((p)=> p - foundProduct.quantity * foundProduct.price)
        settotalQuantities((p)=> p - foundProduct.quantity)
        setcartItems(newCartItems)
    }

    // UPDATE SINGLE PRODUCT FOR TOGGLE CART
    const toggleCartItemQuantity = (id,value) => {
        // value takes "inc" | "dec"
        const foundProduct = cartItems.find((item)=> item._id === id)

        const newCartItems = cartItems.filter((item)=> item._id !== id)

       if(value === 'inc') {
        setcartItems([...newCartItems,{...foundProduct, quantity:foundProduct.quantity + 1}])
        settotalPrice((p)=> p + foundProduct.price)
        settotalQuantities((p)=> p + 1)
       } else if(value === 'dec') {
        if (foundProduct.quantity > 1) {
          setcartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
          settotalPrice((p) => p - foundProduct.price)
          settotalQuantities(p => p - 1)
        }
        }

    }
    
    
    return (
        <UC.Provider
            value={{
                showCart, setshowCart,
                cartItems, setcartItems,
                totalPrice, settotalPrice,
                totalQuantities, settotalQuantities,
                qty,
                incQty,decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove
            }}
        >
            {children}
        </UC.Provider>
    )
}