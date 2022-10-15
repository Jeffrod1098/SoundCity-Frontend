import './App.css';
import 'bulma/css/bulma.css';
import Nav from './components/Nav.js'
import Footer from './components/Footer.js'
import React from 'react'
import HomePage from './pages/HomePage.js'
import ProductPage from './pages/ProductPage.js'
import {Route, Routes, Link} from 'react-router-dom'
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} exact/>
          <Route path='/product/:id' element={<ProductPage/>} />
          <Route path='/cart/:id' element ={<CartPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/profile' elment={<ProfilePage/>}/>
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
