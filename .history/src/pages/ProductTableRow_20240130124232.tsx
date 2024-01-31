// ProductTableRow.tsx
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import Product from '../types';
interface ProductTableRowProps {
  product: Product;
  deleteProduct: (id: number) => void;
  updateProduct: (product: Product) => void;
}

const ProductTableRow: React.FC<ProductTableRowProps> = ({ product, deleteProduct, updateProduct }) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleDelete = () => {
    deleteProduct(product.id);
  };

  const handleUpdate = (updatedProduct: Product) => {
    updateProduct(updatedProduct);
    setIsEditFormOpen(false);
  };

  return (
    <tr className="border-b border-gray-300">
      <td className="py-2">{product.name}</td>
      <td className="py-2">{product.category}</td>
      <td className="py-2">{product.date}</td>
      <td className="py-2">{product.price}</td>
      <td className="py-2">{product.quantity}</td>
      <td className="py-2">
        <img src={product.photo} alt={product.name} className="w-8 h-8" />
      </td>
      <td className="py-2">
        <button onClick={() => setIsEditFormOpen(true)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">
          Edit
        </button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </td>
      {isEditFormOpen && (
        <td colSpan={6} className="py-2">
          <ProductForm product={product} onSubmit={handleUpdate} />
        </td>
      )}
    </tr>
  );
};

export default ProductTableRow;
