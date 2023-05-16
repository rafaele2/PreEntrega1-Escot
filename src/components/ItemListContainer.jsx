import React from 'react'
import { ItemList } from './ItemList.jsx';
import { useState, useEffect } from "react";
import { collection, getDocs, where}  from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"
// import { useParams } from 'react-router-dom';


function ItemListContainer({selectedCategory}) {
  const [products, setProducts] = useState([]) 
  // const {categoryId} = useParams()
  const [category, setCategory] = useState(null)
  
  const getProducts = async (category,) => {
    const query = category ? collection(db, "hardware").where("category", "==", category,) : collection(db, "hardware")
    const data = await getDocs(query)
    setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    getProducts(category)
  }, [category])
    return(
        
    <div>
      <ItemList items={products}/>
    </div>
        
    )
}

export default ItemListContainer