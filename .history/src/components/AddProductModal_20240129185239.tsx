import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';
import { Product } from '../types';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  product: Product | null;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onSave, product }) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUploadedFile(acceptedFiles[0]);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editedProduct) {
      const { name, value } = e.target;
      setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleSave = () => {
    if (editedProduct) {
      const updatedProduct = { ...editedProduct, photo: uploadedFile };
      onSave(updatedProduct);
      setEditedProduct(null);
      setUploadedFile(null);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Product Modal" className="Modal">
      <h2 className="text-2xl mb-4">{product ? 'Update Product' : 'Add Product'}</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={editedProduct?.name || ''} onChange={handleInputChange} />

        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={editedProduct?.category || ''} onChange={handleInputChange} />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={editedProduct?.price || 0} onChange={handleInputChange} />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={editedProduct?.quantity || 0} onChange={handleInputChange} />

        <div className="mt-4">
          <label>Upload Photo:</label>
          <div {...getRootProps()} className="border-dashed border-2 p-4 cursor-pointer">
            <input {...getInputProps()} />
            {uploadedFile ? <p>{uploadedFile.name}</p> : <p>Drag 'n' drop a photo here, or click to select a photo</p>}
          </div>
        </div>

        <button type="button" onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Save
        </button>
        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2">
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default AddProductModal;
