

import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Pay from './components/Pay';
import Success from './components/Success';
import { useSelector } from 'react-redux';




function App() {
  const user = useSelector(state => state.user.currentUser)
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/productslist/:category" element={<ProductList />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/product/:id" element={<Product />}></Route>
     
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
