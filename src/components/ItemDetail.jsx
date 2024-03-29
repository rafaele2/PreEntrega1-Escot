import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';
import {Link} from 'react-router-dom';



export const ItemDetail = ({item})=>{
    // const {addProduct} = useContext(CartContext); de esta forma no puede desestructurar addProduct
    // const addProduct = useContext(CartContext); si lo dejo asi, error addProduct is not a function
    const contexValue = useContext(CartContext)
   
    const { addProduct } = contexValue
    const [quantity, setQuantity] = useState(0);

    const onAdd = (items, count)=>{
        addProduct(items,count);
        setQuantity(count);
    }

    return(
        <div >
            
            <p style={{width: "100%"}}>item detail</p>
            <div >
                <img src={item.img} alt={item.description}/>
            </div>
            <div >
                <h4>{item.description}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            }
            
        </div>
    )
}