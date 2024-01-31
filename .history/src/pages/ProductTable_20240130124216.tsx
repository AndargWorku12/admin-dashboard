// ProductTable.tsx
import React, { useState } from 'react';
import ProductTableRow from './ProductTableRow';
import Product from '../types';
interface ProductTableProps {
  products: Product[];
  deleteProduct: (id: number) => void;
  updateProduct: (product: Product) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, deleteProduct, updateProduct }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filter, setFilter] = useState<string>('');

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase()) ||
      product.date.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th onClick={handleSort} className="py-2 cursor-pointer">
            Name
          </th>
          <th className="py-2">Category</th>
          <th className="py-2">Date</th>
          <th className="py-2">Price</th>
          <th className="py-2">Quantity</th>
          <th className="py-2">Photo</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product) => (
          <ProductTableRow key={product.id} product={product} deleteProduct={deleteProduct} updateProduct={updateProduct} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
