import React from 'react';
import { useContext } from 'react';
import { CartContext } from "../context/CartContext.jsx"
import { CartItem } from './CartItem';

const CartContainer = () => {
  const {state, clearProductCartList} =  useContext(CartContext); 
  const{productCartList} =state
  return (
    <div>
      <p>CartContainer</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button onClick={clearProductCartList}>Vaciar el carrito</button>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
export default CartContainer