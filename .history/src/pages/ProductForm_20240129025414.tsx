// ProductForm.tsx

import React, { useEffect, useState } from 'react';

interface Product {
  id: string;
  photo: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
  date: string;
}

interface ProductFormProps {
  product: Product | null;
  onAdd: (newProduct: Product) => void;
  onEdit: (editedProduct: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onAdd, onEdit }) => {
  const [formData, setFormData] = useState<Product>({
    id: '',
    photo: '',
    name: '',
    price: 0,
    category: '',
    quantity: 0,
    date: '',
  });

  useEffect(() => {
    setFormData(product || {
      id: '',
      photo: '',
      name: '',
      price: 0,
      category: '',
      quantity: 0,
      date: '',
    });
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      onEdit(formData);
    } else {
      onAdd({ ...formData, id: String(Date.now()) });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 shadow-2xl bg-white text-start mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category:
        </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price:
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: Number(e.target.value) })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Quantity:
        </label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({ ...formData, quantity: Number(e.target.value) })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {product ? 'Edit Product' : 'Add Product'}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormData({
              id: '',
              photo: '',
              name: '',
              price: 0,
              category: '',
              quantity: 0,
              date: '',
            });
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
