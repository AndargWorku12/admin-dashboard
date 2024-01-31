import React from 'react';
import ProductRow from './ProductRow';

interface ProductTableProps {
  products: Product[];
  onDelete: (product: Product) => void;
  onUpdate: (product: Product) => void;
  onSort: (key: string, order: 'asc' | 'desc') => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete, onUpdate, onSort }) => {
  return (
    <div className="my-8">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th onClick={() => onSort('id', 'asc')}>ID</th>
            <th onClick={() => onSort('name', 'asc')}>Name</th>
            <th onClick={() => onSort('category', 'asc')}>Category</th>
            <th onClick={() => onSort('price', 'asc')}>Price</th>
            <th onClick={() => onSort('quantity', 'asc')}>Quantity</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} onDelete={() => onDelete(product)} onUpdate={() => onUpdate(product)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
