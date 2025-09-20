import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import './App.css';
import Header from './components/Header/Header.js'
import Categories from './components/Categories/index.js';
import About from './components/About/index.js';
import Delivery from './components/Delivery/index.js';
import Garants from './components/Garants/index.js';
import Footer from './components/Footer/index.js';
import { ProductsContext } from './components/ProductsProvider/index.js';
import ProductInfoPage from './pages/ProductInfoPage.js';
import Tenders from './components/Tenders/index.js';

function App() {
  const products = useContext(ProductsContext);

  return (
    <div className="App">
      <div className="top">
        <Header/>
      </div>
      <div className='main-content'>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Categories categories={products} />
                </>
              }
            />
            <Route path="/:id" element={<ProductInfoPage/>} />
          </Routes>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="delivery">
        <Delivery />
      </section>
      <section id="garranty">
        <Garants />
      </section>
      <section id="tenders">
        <Tenders />
      </section>
      <div className="bottom">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
