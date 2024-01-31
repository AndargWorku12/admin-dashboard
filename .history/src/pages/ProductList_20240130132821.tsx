// ProductList.tsx
import React, { useState } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Product from './types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
    setIsAddModalOpen(false); // Close the add product modal after adding
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    setSelectedProduct(null);
  };

  const deleteProduct = (productId: string) => {
    const productToDelete = products.find((product) => product.id === productId);
    setSelectedProduct(productToDelete || null);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedProduct) {
      setProducts(products.filter((p) => p.id !== selectedProduct.id));
      setIsDeleteModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setSelectedProduct(null);
    setIsDeleteModalOpen(false);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>

      {/* Button to open the add product modal */}
      <button onClick={openAddModal} className="bg-green-500 text-white px-2 py-1 rounded mb-4">
        Add Product
      </button>

      {/* Add ProductForm modal for adding a new product */}
      {isAddModalOpen && <ProductForm onSubmit={addProduct} />}

      {/* Render the product table */}
      <ProductTable products={products} deleteProduct={deleteProduct} updateProduct={updateProduct} />

      {/* Render the delete confirmation modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          product={selectedProduct}
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}
    </div>
  );
};

export default ProductList;
