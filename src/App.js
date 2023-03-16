

import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from "./components/CartContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route  path='/' element={<ItemListContainer/>}/>
    <Route  path='/productos/:category' element={<ItemListContainer/>}/>
    <Route  path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<CartContainer/>}/>
  
    </Routes>   
    </BrowserRouter>

  );
}

export default App;
//‘/’ navega a <ItemListContainer />
//‘/category/:id’  <ItemListContainer />
//‘/item/:id’ navega a <ItemDetailContainer />


// Clickear en el brand debe navegar a ‘/’
// Clickear un Item.js debe navegar a /item/:id
// Clickear en una categoría del navbar debe navegar a /category/:categoryId 



