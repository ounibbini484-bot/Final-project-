import React, {useState } from 'react'
import { CartContext } from './CartContext';

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);

    //prevItems --> array of items

    const addToCart = (item) =>{
        setCartItems((prevItems) =>{
            const existingItem = prevItems.find((i) => i.id === item.id);
            // console.log("Add to cart happening");
            
            if(existingItem){
                return prevItems.map((i) =>
                    i.id === item.id ? {...i, quantity: i.quantity +1}: i
                );
            };

            return [...prevItems, {...item, quantity:1}];
        });
    };


    return(
        <CartContext.Provider
        value={{
            cartItems,
            addToCart
        }}
        >
            {children}
        </CartContext.Provider>
    )


}