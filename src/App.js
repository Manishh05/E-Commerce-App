import React from 'react';
import "./App.css"
import { BrowserRouter ,Route, Router, Routes } from 'react-router-dom';
import Layout  from './component/Layout';
import Home from './component/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Cart from './pages/Cart';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Layout />}>
            <Route index element = { <Home />}/>
            <Route path='About' element={ <About />}/>
            <Route path='Contact' element={<Contact />}/>
            <Route path='Store' element={<OurStore />}/>
            <Route path='blogs' element={<Blog />}/>
            <Route path='compare-product' element={<CompareProduct />}/>
            <Route path='wishlist' element={<WishList />}/>
            <Route path='user' element={<Login />}/>
            <Route path='forgotpassword' element={<ForgotPassword />}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='resetpassword' element={<ResetPassword/>}/>
            <Route path='cart' element={<Cart/>}/>
           
         </Route>
      </Routes>
    </BrowserRouter>
  </>

  
  );
}

export default App;
