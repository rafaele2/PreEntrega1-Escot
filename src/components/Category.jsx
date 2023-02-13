import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import{Link} from "react-router-dom"
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Category = ()=>{
    const {tipoProducto} = useParams();

    const [products, setProducts] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(collection);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
           
                const nuevaLista = resultado.filter(product=>product.category === tipoProducto);
                setProducts(nuevaLista)
            
        })
    },[tipoProducto])

  return (
    <>               
{products.map((product)=>(
<div className="card-group">
    <div className="card" key={product.category}>
    <img src={product.img} height="200px" width="200px" alt={product.description}/>
      <div className="card-body">
        <h5 className="card-title">{product.description}</h5>
        <p className="card-text">Categoria:{product.category}</p>
        <p className="card-text"><small className="text-muted">{product.stock}</small>stock</p>
        <Link  className="btn btn-primary" to={`/item/:id${product.id}`}>Detalle Producto</Link>
      </div>
    </div>
  </div>

))}
    
    </>
  )  
}

export default Category