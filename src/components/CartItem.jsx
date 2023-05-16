import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';


export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div >
            <div >
                <img src={item.img} alt={item.description}/>
            </div>
            <div >
                <p>{item.description}</p>
                <p>precio unitario: {item.price}</p>
                <p>cantidad: {item.stock}</p>
                
                <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}
