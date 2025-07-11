import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/Cart';

const Cart = () => {
  const cart = useContext(CartContext);

  let totalPrice =  cart?.items?.reduce((a,b) => a + b.price, 0);
  return (
    <div>
        {
          cart && cart.items.map((item) => (
            <li>
              {item?.name} : {item.price}
            </li>
          ))
        }
        <h4> Tiotal Price : ${totalPrice}</h4>
    </div>
  )
}

export default Cart
