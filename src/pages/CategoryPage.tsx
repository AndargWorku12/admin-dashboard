// CategoryPage.tsx
import React, { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import CategoryModal from './CategoryModal';

interface Category {
  id: string;
  name: string;
  photo: string;
}

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'Electronics', photo: '' },
    { id: '2', name: 'Furniture', photo: '' },
    { id: '3', name: 'Appliances', photo: '' },
    { id: '4', name: 'Clothing', photo: '' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [nightMode, setNightMode] = useState(false);

  const handleAdd = (newCategory: Category) => {
    const id = (categories.length + 1).toString();
    const updatedCategories = [...categories, { ...newCategory, id }];
    setCategories(updatedCategories);
  };

  const handleEdit = (editedCategory: Category) => {
    const updatedCategories = categories.map((category) =>
      category.id === editedCategory.id ? editedCategory : category
    );
    setCategories(updatedCategories);
  };

  const handleDelete = (id: string) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);
  };

  return (
    <div className={`container mx-auto p-6 ${nightMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <h1 className="text-3xl font-bold mb-6">Category Page</h1>

      <CategoryDropdown
        categories={categories}
        onAdd={() => {
          setModalOpen(true);
          setSelectedCategory(null);
        }}
        onEdit={(category) => {
          setModalOpen(true);
          setSelectedCategory(category);
        }}
        onDelete={handleDelete}
        nightMode={nightMode}
      />

      {modalOpen && (
        <CategoryModal
          category={selectedCategory}
          onClose={() => {
            setModalOpen(false);
            setSelectedCategory(null);
          }}
          onSave={(editedCategory) => {
            if (selectedCategory) {
              handleEdit(editedCategory);
            } else {
              handleAdd(editedCategory);
            }
            setModalOpen(false);
            setSelectedCategory(null);
          }}
          nightMode={nightMode}
        />
      )}
    </div>
  );
};

export default CategoryPage;
