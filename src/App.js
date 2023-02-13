
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<ItemListContainer/>}/>
    <Route exact path='/category/:category' element={<ItemListContainer/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>

  
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



