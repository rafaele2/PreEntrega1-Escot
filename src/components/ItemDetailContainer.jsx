import React from 'react'

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js"

function ItemDetailContainer() {
const{id} = useParams
const [description, setDescription] = useState("")
const [img, setImg] = useState("")
const [item, setItem] = useState("")
const[stock,setStock]= useState(0)
const [category, setCategory] = useState("")

const navigate = useNavigate()
const productsCollection = collection(db, "hardware")  
const [products, setProducts] = useState([])
const detailProduct = async () => {
    const data = await getDocs(productsCollection)
    setProducts(data.docs.find((doc) => ({...doc.data(), id: doc.id})))
  }
  useEffect(() => {
    detailProduct()
  }, [])
const getItem = async(e)=>{
    e.preventDefault()
    await addDoc(productsCollection, {
        description: description,
        img: img,
        stock: stock,
        category: category
    })
    navigate("/")
  
}
useEffect(() => {
    const getProduct = async()=>{
        const products = await getItem(item)
        setDescription(products)
        setItem(products)
        setImg(products)
        setStock(products)
        setCategory(products)
    }
    getProduct()
  }, [id]) 

return (
    <div className="card" style={{width: '18rem'}}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{products.description}</h5>
      <p className="card-text">descripcion del detalle del producto</p>
      <a href="" className="btn btn-primary">Ir al carrito</a>
    </div>
  </div>
   
   )
}
export default ItemDetailContainer