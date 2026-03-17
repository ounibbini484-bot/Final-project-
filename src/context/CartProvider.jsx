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


    const removeFromCart = (id) =>{
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
    };

    const updateQuantity = (id, delta) =>{
        setCartItems((prevItems) => prevItems
                                        .map((i) => (i.id === id ? {...i, quantity: (i.quantity + delta)} : i))
                                        .filter((i) => i.quantity > 0)
    );
    }


    return(
        <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
        }}
        >
            {children}
        </CartContext.Provider>
    )


}