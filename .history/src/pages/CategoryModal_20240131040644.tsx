// CategoryModal.tsx
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';

interface Category {
    id: string;
    name: string;
    photo: string;
  }

interface CategoryModalProps {
    category: Category | null;
    onClose: () => void;
    onSave: (editedCategory: Category) => void;
    nightMode: boolean;  // Add this line
  }

const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose, onSave, nightMode }) => {
  const [editedCategory, setEditedCategory] = useState<Category | null>(category);
  const [previewImage, setPreviewImage] = useState<string | null>(category?.photo || null);

  useEffect(() => {
    setEditedCategory(category);
    setPreviewImage(category?.photo || null);
  }, [category]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCategory((prevCategory) => ({ ...prevCategory!, [name]: value }));
  };

  const handleSave = () => {
    if (editedCategory) {
      onSave(editedCategory);
      onClose();
    }
  };

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setEditedCategory((prevCategory) => ({ ...prevCategory!, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center`}>
      <div
        className={`bg-white p-6 rounded-md w-96 ${nightMode ? 'text-white bg-gray-900' : 'text-gray-800'}`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${nightMode ? 'text-white' : 'text-gray-800'}`}>
          {category ? 'Edit Category' : 'Add Category'}
        </h2>

        <Dropzone onDrop={handleDrop} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="mb-4">
              <input {...getInputProps()} />
              {previewImage ? (
                <img src={previewImage} alt="Category Preview" className="max-w-full h-auto mb-2" />
              ) : (
                <p>{`Drag & drop an image here, or click to select one ${nightMode ? '⚡️' : ''}`}</p>
              )}
            </div>
          )}
        </Dropzone>

        <label className={`block mb-2 ${nightMode ? 'text-white' : 'text-gray-800'}`}>
          Name:
          <input
            type="text"
            name="name"
            value={editedCategory?.name || ''}
            onChange={handleInputChange}
            className={`border p-2 w-full rounded-md ${nightMode ? 'text-white' : 'text-gray-800'}`}
          />
        </label>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 ${
              nightMode ? 'hover:bg-gray-400' : 'hover:bg-gray-500'
            }`}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              nightMode ? 'hover:bg-blue-600' : 'hover:bg-blue-700'
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
