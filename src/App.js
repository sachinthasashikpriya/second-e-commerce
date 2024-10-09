
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './pages/Cart';
import { LoginSignup } from './pages/LoginSignup';
import { Product } from './pages/Product';
import { Shop } from './pages/Shop';
import { ShopCategory } from './pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/Men' element={<ShopCategory category="Men"/>}/> 
        <Route path='/Women' element={<ShopCategory category="Women"/>}/> 
        <Route path='/Kids' element={<ShopCategory category="Kids"/>}/> 
        <Route path='Product' element={<Product/>}>
          <Route path=':ProductId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/> 
        <Route path='/Login' element={<LoginSignup/>}/> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
