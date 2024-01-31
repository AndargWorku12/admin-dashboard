// ProductModal.tsx
import React, { useState, useEffect } from 'react';
// import Product from './Product';



interface Product {
    id: string;
    photo: string;
    name: string;
    category: string;
    price: number;
    qty: number;
  }
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
    <div>
      {isOpen && (
        <div>
          <label>ID</label>
          <input type="text" name="id" value={formData?.id || ''} onChange={handleChange} disabled />

          <label>Photo URL</label>
          <input type="text" name="photo" value={formData?.photo || ''} onChange={handleChange} />

          <label>Name</label>
          <input type="text" name="name" value={formData?.name || ''} onChange={handleChange} />

          <label>Category</label>
          <input type="text" name="category" value={formData?.category || ''} onChange={handleChange} />

          <label>Price</label>
          <input type="number" name="price" value={formData?.price || 0} onChange={handleChange} />

          <label>Quantity</label>
          <input type="number" name="qty" value={formData?.qty || 0} onChange={handleChange} />

          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
