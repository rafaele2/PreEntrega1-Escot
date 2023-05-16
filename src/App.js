

import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from "./components/CartContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartProvider} from './context/CartContext';
function App() {
  return (
    <CartProvider> 
       <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route  path='/' element={<ItemListContainer/>}/>
    <Route  path='/productos/:category' element={<ItemListContainer/>}/>
    <Route  path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<CartContainer/>}/>
  
    </Routes>   
    </BrowserRouter>
    </CartProvider>
 

  );
}

export default App;