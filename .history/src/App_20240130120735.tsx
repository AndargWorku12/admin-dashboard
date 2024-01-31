
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
// import SignUpForm from './pages/LoginPopup'
import Orders from './pages/Orders';
import Category from './pages/Category';
import Login from './pages/Login'
import Analytics from './pages/Analytics';
import CustemerReview from './pages/CustemerReview';
import ProductList from './pages/ProductList';
import ShopCard from './pages/ShopCard';
import './App.css'
import SignUpForm from './pages/SignUpForm';
import ForgotPassword from './pages/ForgetPassword';
import AnalyticsPage from './pages/Analytics';



type SaleData = {
  date: string;
  amount: number;
};

type RevenueData = {
  month: string;
  revenue: number;
};

type Product = {
    id: string;
    photo: string;
    name: string;
    price: number;
    category: string;
};

type Order = {
    id: string;
    productName: string;
    quantity: number;
    totalPrice: number;
  
};

type CategoryType = {
  id: string;
  photo:string;
  name: string;
};



// Sample props for components
type DashboardProps = {
  saleData: SaleData[];
  revenueData: RevenueData[];
  // ... other props
};

type AnalyticsProps = {
  salesData: SaleData[];
  // ... other props
};

type ProductProps = {
  products: Product[];
  onUpdate: (productId: string, updatedProduct: Product) => void;
  
};




type OrderProps = {
  orders: Order[];
  // ... other props
};

type CategoryProps = {
  categories: CategoryType[];
  // ... other props
};







const App: React.FC = () => {


// for the product page to handle
  const [products, setProducts] = useState<Product[]>([

   
    {
      id: '1',
      photo: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
      name: 'Product 1',
      price: 29.99,
      category: 'Electronics',
    },
    {
      id: '2',
      photo: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
      name: 'Product 2',
      price: 49.99,
      category: 'Clothing',
    },
    {
      id: '3',
      photo: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
      name: 'Product 3',
      price: 9.99,
      category: 'Books',
    },
    {
      id: '4',
      photo: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
      name: 'Product 4',
      price: 79.99,
      category: 'Home and Kitchen',
    },
    {
      id: '5',
      photo: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
      name: 'Product 5',
      price: 39.99,
      category: 'Toys',
    },
    
   
   
  ]);

  // Function to handle creating a new product
  const handleCreate = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Function to handle updating a product
 
  const handleUpdate = (productId: string, newName: string, newPrice: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, name: newName, price: newPrice }
          : product
      )
    );
  };
 


  // Function to handle deleting a product
  const handleDelete = (productId: string) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

//  for AnalyticsPage
// for category page


const [categories, setCategories] = useState<CategoryType[]>([
  {
    id: '1',
    photo: 'https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    name: 'Category 1',
  },
  {
    id: '2',
    photo: 'https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    name: 'Category 2',
  },
  {
    id: '3',
    photo: 'https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    name: 'Category 3',
  },
  {
    id: '4',
    photo: 'https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    name: 'Category 4',
  },

]);

// Function to handle creating a new category
// const handleCreateCategory = (newCategory: CategoryType) => {
//   setCategories((prevCategories) => [...prevCategories, newCategory]);
// };
const handleCreateCategory = (newCategory: CategoryType) => {
  // Add the new category to the list of categories
  setCategories((prevCategories) => [...prevCategories, newCategory]);
};

const handleUpdateCategory = (categoryId: string, newName: string) => {
  setCategories((prevCategories) =>
    prevCategories.map((category) =>
      category.id === categoryId ? { ...category, name: newName } : category
    )
  );
};

// Function to handle deleting a category
const handleDeleteCategory = (categoryId: string) => {
  setCategories((prevCategories) => prevCategories.filter((category) => category.id !== categoryId));
};

  const saleData: SaleData[] = [
    { date: '2022-01-01', amount: 100 },
    { date: '2022-01-02', amount: 150 },
    { date: '2022-01-03', amount: 200 },
    { date: '2022-01-04', amount: 120 },
    { date: '2022-01-05', amount: 180 },
    { date: '2022-01-06', amount: 90 },
    { date: '2022-01-07', amount: 110 },
    { date: '2022-01-08', amount: 130 },
    { date: '2022-01-09', amount: 170 },
    { date: '2022-01-10', amount: 160 },
  ];

  const revenueData: RevenueData[] = [
    { month: 'January', revenue: 500 },
    { month: 'February', revenue: 700 },
    { month: 'March', revenue: 600 },
    { month: 'April', revenue: 800 },
    { month: 'May', revenue: 900 },
    { month: 'June', revenue: 750 },
    { month: 'July', revenue: 850 },
    { month: 'August', revenue: 950 },
    { month: 'September', revenue: 700 },
    { month: 'October', revenue: 850 },
  ];
  
 
   const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      productName: 'Laptop',
      quantity: 2,
      totalPrice: 2000,
    },
    {
      id: '2',
      productName: 'Smartphone',
      quantity: 3,
      totalPrice: 1200,
    },
    {
      id: '3',
      productName: 'Headphones',
      quantity: 1,
      totalPrice: 100,
    },
    {
      id: '4',
      productName: 'Camera',
      quantity: 1,
      totalPrice: 800,
    },

   ]);

  // Function to create a new order
  const handleCreateOrder = (newOrder: Order) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  // Function to delete an order
  const handleDeleteOrder = (orderId: string) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  // Function to update an order
  const handleUpdateOrder = (orderId: string, updatedOrder: Order) => {
    // Placeholder implementation: Updating the order in the list
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, ...updatedOrder } : order
      )
    );
  };
  
  return (
    <div >
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard saleData={saleData} revenueData={revenueData}  />} />
        <Route path="/dashboard" element={<Dashboard saleData={saleData} revenueData={revenueData}  />} />
       <Route path="/login" element={<Login/>}/>
       <Route path='/forget-password' element={<ForgotPassword/>}/>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/review"element={<CustemerReview username="John" joinedDate="2022-01-01" reviewDate="2022-01-15" reviewText="Lorem ipsum" />}
/>

        <Route path="/analytics" element={<Analytics  />} />
        <Route
  path="/product"
  element={<ProductList />}
/>
        <Route path="/shop" element={<ShopCard />} />
        <Route
        path="/orders"
        element={
          <Orders
  orders={orders}
  onCreateOrder={handleCreateOrder}
  onDeleteOrder={handleDeleteOrder}
  onUpdateOrder={handleUpdateOrder}
/>
        }
      />
       
        <Route
            path="/category"
            element={<Category
              categories={categories}
              onCreate={handleCreateCategory}
              onDelete={handleDeleteCategory}
              onUpdate={handleUpdateCategory}
            />}
          />
      
      </Routes>
    </Sidebar>
  </BrowserRouter>
  </div>
  );
};

export default App;
