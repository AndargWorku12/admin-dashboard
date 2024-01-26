import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Category from "./pages/Category";
import Login from './pages/login/Login';
import Analytics from './pages/Analytics';
import CustemerReview from './pages/CustemerReview';
import Products from './pages/Products';
import ShopCard from './pages/ShopCard';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard salesData={salesData} revenueData={revenueData} />} />
          <Route path="/dashboard" element={<Dashboard salesData={salesData} revenueData={revenueData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/review" element={<CustemerReview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Products />} />
          <Route path="/shop" element={<ShopCard/>}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="/category" element={<Category/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
