import { useState, useEffect } from "react";
import { db } from "../firebaseConfig/firebase.js"
import { collection, doc, getDoc } from "firebase/firestore"
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const {id} = useParams();

    const [item, setItem] = useState({});
    const productsCollection = collection(db, "hardware");
    
    useEffect(() => {
        const getProduct = async () => {
            const productDoc = doc(productsCollection, id);
            const productSnapshot = await getDoc(productDoc);
            
            if (productSnapshot.exists()) {
                setItem({id: productSnapshot.id, ...productSnapshot.data()});
            } else {
                console.log("No such document!");
            }
        }
        getProduct();
    }, [id, productsCollection]);

    return(
        <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;