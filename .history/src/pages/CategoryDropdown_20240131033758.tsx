// CategoryDropdown.tsx
import React from 'react';

interface CategoryDropdownProps {
  categories: Category[];
  onAdd: () => void;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories, onAdd, onEdit, onDelete }) => {
  return (
    <div className="mb-4">
      <label className="mr-2">Select Category:</label>
      <select
        className="border p-2 rounded-md"
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
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
          className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete Category
        </button>
      )}
    </div>
  );
};

export default CategoryDropdown;
