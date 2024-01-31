// ProductForm.tsx
import React, { useState, useEffect } from 'react';
import Product from '../types';
interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit }) => {
  const [name, setName] = useState(product?.name || '');
  const [photo, setPhoto] = useState(product?.photo || '');
  const [category, setCategory] = useState(product?.category || '');
  const [date, setDate] = useState(product?.date || '');
  const [price, setPrice] = useState(product?.price || 0);
  const [quantity, setQuantity] = useState(product?.quantity || 0);

  useEffect(() => {
    setName(product?.name || '');
    setPhoto(product?.photo || '');
    setCategory(product?.category || '');
    setDate(product?.date || '');
    setPrice(product?.price || 0);
    setQuantity(product?.quantity || 0);
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct: Product = {
      id: product?.id || Date.now(),
      name,
      photo,
      category,
      date,
      price,
      quantity,
    };
    onSubmit(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="mb-2">Nsame:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mb-2 p-1 border border-gray-300" />
      <label className="mb-2">Photo URL:</label>
      <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} className="mb-2 p-1 border border-gray-300" />
      <label className="mb-2">Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="mb-2 p-1 border border-gray-300" />
      <label className="mb-2">Date:</label>
      <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="mb-2 p-1 border border-gray-300" />
      <label className="mb-2">Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mb-2 p-1 border border-gray-300" />
      <label className="mb-2">Quantity:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="mb-2 p-1 border border-gray-300" />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">
        {product ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default ProductForm;
