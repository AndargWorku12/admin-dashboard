// CategoryModal.tsx
import React, { useState, useEffect } from 'react';

interface CategoryModalProps {
  category: Category | null;
  onClose: () => void;
  onSave: (category: Category) => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose, onSave }) => {
  const [editedCategory, setEditedCategory] = useState<Category | null>(category);

  useEffect(() => {
    setEditedCategory(category);
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

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">{category ? 'Edit Category' : 'Add Category'}</h2>

        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={editedCategory?.name || ''}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
          />
        </label>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
