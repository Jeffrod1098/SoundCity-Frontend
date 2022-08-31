import './App.css';
import 'bulma/css/bulma.css';
import Nav from './components/Nav.js'
import Footer from './components/Footer.js'
import React from 'react'
import HomePage from './pages/HomePage.js'
import ProductPage from './pages/ProductPage.js'
import {Route, Routes, Link} from 'react-router-dom'



function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ProductPage/>} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
