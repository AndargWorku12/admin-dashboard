// DeleteConfirmationModal.tsx
import React from 'react';
import Product from '../types';

interface DeleteConfirmationModalProps {
  product: Product | null;
  confirmDelete: () => void;
  cancelDelete: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ product, confirmDelete, cancelDelete }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <p className="mb-4">Are you sure you want to delete {product?.name}?</p>
        <div className="flex justify-end">
          <button onClick={confirmDelete} className="mr-2 bg-red-500 text-white px-2 py-1 rounded">
            Yes
          </button>
          <button onClick={cancelDelete} className="bg-blue-500 text-white px-2 py-1 rounded">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
