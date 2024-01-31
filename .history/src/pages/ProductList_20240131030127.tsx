import React, { useState } from 'react';
import ProductTable from '../components/ProductTable';
import ProductModal from '../components/ProductModal';


interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  date: string;
  photo: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Product 1',
      category: 'Category A',
      price: 10,
      quantity: 5,
      date: '2024-01-30',
      photo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D', // Example photo URL
    },
    {
      id: '1',
      name: 'Product 1',
      category: 'Category A',
      price: 10,
      quantity: 5,
      date: '2024-01-30',
      photo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D', // Example photo URL
    },
    {
      id: '1',
      name: 'Product 1',
      category: 'Category A',
      price: 10,
      quantity: 5,
      date: '2024-01-30',
      photo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D', // Example photo URL
    },
    {
      id: '1',
      name: 'Product 1',
      category: 'Category A',
      price: 10,
      quantity: 5,
      date: '2024-01-30',
      photo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D', // Example photo URL
    },
    
    // Add more initial products as needed
  ]);

  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [nightMode, setNightMode] = useState(false);

  const handleDelete = (id: string) => {
    setDeleteConfirmation(id);
  };

  const handleEdit = (editedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleAdd = (newProduct: Product) => {
    // For simplicity, generating a unique ID here (you may use a more robust method)
    const id = (products.length + 1).toString();
    const updatedProducts = [...products, { ...newProduct, id }];
    setProducts(updatedProducts);
  };

  const handleNightModeToggle = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className={`container mx-auto p-6 ${nightMode ? 'bg-gray-900 text-white' : ''}`}>
      <h1 className="text-3xl font-bold mb-6">Product Page</h1>

      <button
        onClick={() => {
          setSelectedProduct({
            id: (products.length + 1).toString(),
            name: '',
            category: '',
            price: 0,
            quantity: 0,
            date: '',
            photo: '',
          });
          setModalOpen(true);
        }}
        className={`bg-green-500 text-white px-4 py-2 rounded-md mb-4 ${
          nightMode ? 'hover:bg-green-600' : 'hover:bg-green-700'
        }`}
      >
        Add Product
      </button>

      <ProductTable
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
        nightMode={nightMode}
      />

      {deleteConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96">
            <p>{`Are you sure you want to delete product with ID: ${deleteConfirmation}?`}</p>
            <button
              onClick={() => {
                const updatedProducts = products.filter(
                  (product) => product.id !== deleteConfirmation
                );
                setProducts(updatedProducts);
                setDeleteConfirmation(null);
              }}
              className={`bg-red-500 text-white px-4 py-2 rounded-md mr-2 ${
                nightMode ? 'hover:bg-red-600' : 'hover:bg-red-700'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setDeleteConfirmation(null)}
              className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400`}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {modalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setModalOpen(false);
            setSelectedProduct(null);
          }}
          onSave={(editedProduct) => {
            if (selectedProduct) {
              // Editing existing product
              handleEdit(editedProduct);
            } else {
              // Adding new product
              handleAdd(editedProduct);
            }
            setModalOpen(false);
            setSelectedProduct(null);
          }}
          nightMode={nightMode}
        />
      )}

      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleNightModeToggle}
          className={`bg-gray-500 text-white px-4 py-2 rounded-md ${
            nightMode ? 'hover:bg-gray-600' : 'hover:bg-gray-700'
          }`}
        >
          {nightMode ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>
    </div>
  );
};

export default ProductList;