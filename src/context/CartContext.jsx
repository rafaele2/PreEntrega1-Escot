import { createContext, useState, useEffect } from "react";
import {db} from "../firebaseConfig/firebase";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

  useEffect(() => {
    // Obtener los datos del carrito de la base de datos
    const unsubscribe = db.collection("hardware").doc("myCart").onSnapshot((doc) => {
      if (doc.exists) {
        setProductCartList(doc.data().products);
      } else {
        console.log("No se encontró el documento");
      }
    });

    return unsubscribe;
  }, []);

  const isInCart = (id) => {
    const elementExists = productCartList.some((elemento) => elemento.id === id);
    return elementExists;
  };

  const addProduct = (item, stock) => {
    // Verificar si el producto existe en el carrito
    const productIndex = productCartList.findIndex((element) => element.id === item.id);
    if (isInCart(item.id)) {
      // Si el producto existe, actualizar la cantidad y el precio total
      const newQty = productCartList[productIndex].quantity + stock;
      const newTotalPrice = newQty * item.price;
      db.collection("hardware").doc("myCart").update({
        [`products.${productIndex}.quantity`]: newQty,
        [`products.${productIndex}.totalPrice`]: newTotalPrice,
      });
    } else {
      // Si el producto no existe, agregarlo al carrito
      const newProduct = { ...item, quantity: stock, totalPrice: stock * item.price };
      db.collection("hardware").doc("myCart").update({
        products: [...productCartList, newProduct],
      });
    }
  };

  const removeProduct = (idProduct) => {
    // Filtrar los productos que no coinciden con el ID del producto a eliminar
    const newArray = productCartList.filter((elm) => elm.id !== idProduct);
    db.collection("hardware").doc("myCart").update({
      products: newArray,
    });
  };

  const clearProductCartList = () => {
    db.collection("hardware").doc("myCart").update({
      products: [],
    });
  };

  const getTotalProducts = () => {
    const totalProducts = productCartList.reduce((acc, item) => acc + item.quantity, 0);
    return totalProducts;
  };

  return (
    <CartContext.Provider
      value={{ productCartList, addProduct, removeProduct, clearProductCartList, isInCart, getTotalProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};