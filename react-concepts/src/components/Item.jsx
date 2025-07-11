import React from 'react'
import { useContext } from 'react';
import { CartContext } from "../context/Cart";

const Item = (prop) => {
    const cart = useContext(CartContext);
    console.log("Cart : ", cart);

    return (
        <div>
            <h4>{prop.name}</h4>
            <p>Price: {prop.price}</p>
            <button onClick={() => cart.setItems([...cart.items, {name: prop.name, price: prop.price}])}>Add to cart</button>
        </div>
    )
}

export default Item
