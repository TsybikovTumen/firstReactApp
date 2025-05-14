import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header.js'
import Categories from './components/Categories/index.js';
import About from './components/About/index.js';
import Delivery from './components/Delivery/index.js';
import Garants from './components/Garants/index.js';
import ReviewSlider from './components/Reviews/index.js';
import Footer from './components/Footer/index.js';
import ProductDetail from './components/ProductDetail/index.js';

import { useState, useEffect } from 'react';

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCategories(data))
      .catch(error => {
        console.error('Ошибка при загрузке JSON:', error);
      });
  }, []);

  return (
    <div classdescription="App">
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Categories categories={categories} />
            <About />
            <Delivery />
            <Garants />
            <ReviewSlider />
          </>
        } />
        <Route path="/product/:id" element={ProductDetail} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
