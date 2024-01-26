
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
import Products from './pages/Products';
import ShopCard from './pages/ShopCard';
import './App.css'
import SignUpForm from './pages/SignUpForm';


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
  name: string;
  price: number;
  image:string;
};

type Order = {
  id: string;
  product: Product;
  quantity: number;
  totalPrice: number;
};

type CategoryType = {
  id: string;
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
      name: 'Laptop',
      price: 999,
      image: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
    },
    {
      id: '2',
      name: 'Smartphone',
      price: 599,
      image: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
    },
    {
      id: '3',
      name: 'Headphones',
      price: 79,
      image: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
    },
    {
      id: '4',
      name: 'Smartwatch',
      price: 149,
      image: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
    },
    {
      id: '5',
      name: 'Camera',
      price: 799,
      image: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
    },
    {
      id: '6',
      name: 'Tablet',
      price: 349,
      image: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
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


// for category page


const [categories, setCategories] = useState<CategoryType[]>([
  { id: '1', name: 'Category 1' },
  { id: '2', name: 'Category 2' },
  { id: '3', name: 'Category 3' },
  { id: '4', name: 'Category 4' },
  { id: '5', name: 'Category 5' },
  { id: '6', name: 'Category 6' },
  { id: '7', name: 'Category 7' },
  { id: '8', name: 'Category 8' },
  { id: '9', name: 'Category 9' },
  { id: '10', name: 'Category 10' },

]);

// Function to handle creating a new category
const handleCreateCategory = (newCategory: CategoryType) => {
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
    { id: '1', product: products[0], quantity: 2, totalPrice: 234 },
    { id: '2', product: products[2], quantity: 1, totalPrice: 234 },
    { id: '3', product: products[4], quantity: 3, totalPrice: 234 },
    { id: '4', product: products[6], quantity: 2, totalPrice: 234 },
    { id: '5', product: products[8], quantity: 1, totalPrice: 234 },
    { id: '6', product: products[1], quantity: 2, totalPrice: 234 },
    { id: '7', product: products[3], quantity: 3, totalPrice: 234 },
    { id: '8', product: products[5], quantity: 1, totalPrice: 234 },
    { id: '9', product: products[7], quantity: 2, totalPrice: 234 },
    { id: '10', product: products[9], quantity: 1, totalPrice: 234 },

   ]);

  // Function to create a new order
  const handleCreateOrder = (newOrder: Order) => {
    setOrders([...orders, newOrder]);
  };

  // Function to delete an order
  const handleDeleteOrder = (orderId: string) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  // Function to update an order
  const handleUpdateOrder = (orderId: string, updatedOrder: Order) => {
    const updatedOrders = orders.map(order => (order.id === orderId ? updatedOrder : order));
    setOrders(updatedOrders);
  };
  
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard saleData={saleData} revenueData={revenueData} />} />
        <Route path="/dashboard" element={<Dashboard saleData={saleData} revenueData={revenueData} />} />
       <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/review"element={<CustemerReview username="John" joinedDate="2022-01-01" reviewDate="2022-01-15" reviewText="Lorem ipsum" />}
/>

        <Route path="/analytics" element={<Analytics saleData={saleData} />} />
        <Route
  path="/product"
  element={<Products products={products} onCreate={handleCreate} onDelete={handleDelete} onUpdate={handleUpdate} />}
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
            element={<Category categories={categories} onCreate={handleCreateCategory} onDelete={handleDeleteCategory} onUpdate={handleUpdateCategory} />}
          />
      
      </Routes>
    </Sidebar>
  </BrowserRouter>
  );
};

export default App;
