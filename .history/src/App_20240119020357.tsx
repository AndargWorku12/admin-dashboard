import React from 'react'
import Analytics from "./pages/Analytics"
// import Category from "./pages/Category"
const App:React.FC = () => {
  return (
    <div>
      <Analytics/>
      {/* <Category/> */}
    </div>
  )
}

export default App










// import React from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";

// import Analytics from "./pages/Analytics";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/login/Login"
// import Products from "./pages/Products";
// import Signup from "./pages/Signup";


// import Orders from "./pages/Orders";
// import ShopCard from "./pages/ShopCard";
// import CustemerReview from "./pages/CustemerReview";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/analytics" element={<Analytics />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/category" element={<Category />} />
//         <Route path="/review" element={<CustemerReview />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/product" element={<Products />} />
//         <Route path="/shop" element={<ShopCard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
