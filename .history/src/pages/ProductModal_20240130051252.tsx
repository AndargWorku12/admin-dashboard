// ProductModal.tsx
import React, { useState, useEffect } from 'react';
import Product from './Product';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (newProduct: Product) => void;
  onUpdate: (updatedProduct: Product) => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onCreate, onUpdate, product }) => {
  const [formData, setFormData] = useState<Product | null>(product);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...(formData || {}),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData) {
      formData.id ? onUpdate(formData) : onCreate(formData);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="container mx-auto p-4 mt-16 bg-white shadow-md rounded-md">
        {isOpen && (
          <div>
            <label className="block mb-2">ID</label>
            <input type="text" name="id" value={formData?.id || ''} onChange={handleChange} disabled className="w-full p-2 mb-4" />

            <label className="block mb-2">Photo URL</label>
            <input type="text" name="photo" value={formData?.photo || ''} onChange={handleChange} className="w-full p-2 mb-4" />

            <label className="block mb-2">Name</label>
            <input type="text" name="name" value={formData?.name || ''} onChange={handleChange} className="w-full p-2 mb-4" />

            <label className="block mb-2">Category</label>
            <input type="text" name="category" value={formData?.category || ''} onChange={handleChange} className="w-full p-2 mb-4" />

            <label className="block mb-2">Price</label>
            <input type="number" name="price" value={formData?.price || 0} onChange={handleChange} className="w-full p-2 mb-4" />

            <label className="block mb-2">Quantity</label>
            <input type="number" name="qty" value={formData?.qty || 0} onChange={handleChange} className="w-full p-2 mb-4" />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
