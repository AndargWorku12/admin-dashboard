import React from 'react';

interface ProductRowProps {
  product: Product;
  onDelete: () => void;
  onUpdate: () => void;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, onDelete, onUpdate }) => {
  return (
    <tr className="border-t">
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.photo && <img src={URL.createObjectURL(product.photo)} alt={`Product ${product.id}`} className="w-8 h-8" />}</td>
      <td>
        <button onClick={onUpdate} className="bg-yellow-500 text-white px-2 py-1 rounded mx-1">
          Update
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded mx-1">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
