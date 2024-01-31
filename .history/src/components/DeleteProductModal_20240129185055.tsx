import React from 'react';
import Modal from 'react-modal';
import { Product } from '../types';

interface DeleteProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  product: Product | null;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ isOpen, onClose, onDelete, product }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Delete Product Modal" className="Modal">
      <h2 className="text-2xl mb-4">Are you sure you want to delete this product?</h2>
      {product && (
        <div>
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          {product.photo && <img src={URL.createObjectURL(product.photo)} alt={`Product ${product.id}`} className="w-8 h-8" />}
        </div>
      )}
      <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
        Yes
      </button>
      <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2">
        No
      </button>
    </Modal>
  );
};

export default DeleteProductModal;
