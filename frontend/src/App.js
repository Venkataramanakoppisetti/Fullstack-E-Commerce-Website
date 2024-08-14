import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import ProductItem from './pages/ProductItem';
import CartItem from './pages/CartItem';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory category="men"/>} />
          <Route path="/womens" element={<ShopCategory category="women"/>} />
          <Route path="/kids" element={<ShopCategory category="kid"/>} />
          <Route path="/product" element={<ProductItem/>}>
            <Route path=":id" element={<ProductItem/>} />
          </Route>
          <Route path='/cart' element={<CartItem/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
