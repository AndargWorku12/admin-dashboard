// CategoryDropdown.tsx
import React from 'react';

interface Category {
    id: string;
    name: string;
    photo: string;
  }

interface CategoryDropdownProps {
  categories: Category[];
  onAdd: () => void;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
  nightMode: boolean;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories, onAdd, onEdit, onDelete, nightMode }) => {
  return (
    <div className={`mb-4 ${nightMode ? 'text-white' : 'text-gray-800'}`}>
      <label className="mr-2">Select Category:</label>
      <select
        className={`border p-2 rounded-md ${nightMode ? 'text-white bg-gray-800' : 'text-gray-800 bg-white'}`}
        onChange={(e) => {
          const selectedCategory = categories.find((category) => category.id === e.target.value);
          if (selectedCategory) {
            onEdit(selectedCategory);
          }
        }}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <button
        onClick={onAdd}
        className={`ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${nightMode && 'hover:bg-blue-700'}`}
      >
        Add Category
      </button>

      {categories.length > 0 && (
        <button
          onClick={() => {
            const selectedCategoryId = document.querySelector('select')?.value;
            if (selectedCategoryId) {
              onDelete(selectedCategoryId);
            }
          }}
          className={`ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ${nightMode && 'hover:bg-red-700'}`}
        >
          Delete Category
        </button>
      )}
    </div>
  );
};

export default CategoryDropdown;
