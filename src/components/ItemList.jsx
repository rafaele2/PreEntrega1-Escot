import { Item } from "./Item"
import { ItemCount } from "./ItemCount"



export const ItemList = ({items})=>{

    return(
        <div>
            
            {
                items.map(producto=>(
                 
                        <>
                        <Item key={producto.category} item={producto}/>
                        
                        </>
                        
                    
                ))
            }
        </div>
    )
}