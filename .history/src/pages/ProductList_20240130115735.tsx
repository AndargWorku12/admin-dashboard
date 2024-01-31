// ProductList.tsx
import React, { useState } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
    setSelectedProduct(null);
  };

  const deleteProduct = (productId: number) => {
    const productToDelete = products.find((product) => product.id === productId);
    setSelectedProduct(productToDelete || null);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedProduct) {
      setProducts(products.filter((product) => product.id !== selectedProduct.id));
      setIsDeleteModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setSelectedProduct(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <ProductForm addProduct={addProduct} />
      <ProductTable products={products} deleteProduct={deleteProduct} updateProduct={updateProduct} />
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
