import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Login from './pages/login/Login';
import Analytics from './pages/Analytics';
import CustemerReview from './pages/CustemerReview';
import Product from './pages/Product';
import ShopCard from './pages/ShopCard';
import Orders from '../.history/src/pages/Orders_20240119003900';
import Login from '../.history/src/pages/login/Login_20240116225522';
import Signup from '../.history/src/pages/Signup_20240116232920';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/review" element={<CustemerReview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shop" element={<ShopCard/>}/>
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
