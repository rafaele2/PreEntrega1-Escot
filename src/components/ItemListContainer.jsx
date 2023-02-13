import React from 'react'
import {Link} from 'react-router-dom'
import Category from './Category'
import ItemDetailContainer from './ItemDetailContainer'
import { useState, useEffect } from "react";
import { collection, getDocs,} from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"

function ItemListContainer() {
  //1configurar hooks
  const [products, setProducts] = useState([]) 
  const [category, setCategory] = useState([])

  const productsCollection = collection(db, "hardware")  

 

  const getProducts = async () => {
    const data = await getDocs(productsCollection)

    setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    setCategory(data.docs.filter((doc)=>({...doc.data(),category: doc.category})))
  }

  useEffect(() => {
    getProducts()
  }, [])
  //devolver la vista

  return (
    <>               
{products.map((product)=>(
  <div class="container text-center">
   <div class="row">
        <div className="col">
          <div className="card" key={product.id}>
            <img src={product.img} className="card-img-top" height="200px" width="200px" alt={product.description}/>
            <div className="card-body">
            <h5 className="card-title">{product.description}</h5>
              <p className="card-text">Categoria:{product.category}</p>
              <p className="card-text">Stock: <small className="text-muted">{product.stock}</small></p>
              <Link  className="btn btn-primary" to={`/item/:id${product.id}`}>Detalle Producto</Link>
            </div>
          </div>
        </div>
      </div>
      </div>

))}
    
    </>
  )  
}

export default ItemListContainer

