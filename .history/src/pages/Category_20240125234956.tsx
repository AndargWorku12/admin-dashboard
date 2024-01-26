import React, { useState } from 'react';

interface Category {
  id: string;
  photo: string;
  name: string;
}



 interface CategoryListProps {
  categories: Category[];
  onCreateCategory: (newCategory: Omit<Category, 'id'> & { id?: string }) => void;
  onDeleteCategory: (categoryId: string) => void;
  onUpdateCategory: (categoryId: string, newName: string) => void;
 }

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onCreateCategory,
  onDeleteCategory,
  onUpdateCategory,
}) => {
  const [newCategory, setNewCategory] = useState<Omit<Category, 'id'> & { id?: string }>({
    photo: '',
    name: '',
  });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const handleCreateCategory = () => {
    onCreateCategory({ ...newCategory, id: Date.now().toString() });
    setNewCategory({
      photo: '',
      name: '',
    });
  };

  const handleUpdateCategory = () => {
    if (editingCategory) {
      onUpdateCategory(editingCategory.id, editingCategory.name);
      setEditingCategory(null);
    }
  };

  const handleDeleteCategory = (id: string) => {
    onDeleteCategory(id);
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-64 text-center">
      <h2 className="text-3xl font-bold mb-4">Category List</h2>
      <table className="w-full border border-cyan-700 w-max-80">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2">Photo</th>
            <th className="py-2">Name</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b">
              <td>
                <img src={category.photo} alt={category.name} className="w-12 h-12 object-cover" />
              </td>
              <td className="py-2">{category.name}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditCategory(category)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-6 mb-4">
        {editingCategory ? 'Edit Category' : 'Create New Category'}
      </h2>
      <div className="grid grid-cols-2 gap-4 text-start">
        <div>
          <label htmlFor="categoryPhoto" className="block text-sm font-medium text-gray-700">
            Photo URL:
          </label>
          <input
            type="text"
            id="categoryPhoto"
            placeholder="Enter photo URL"
            value={editingCategory ? editingCategory.photo : newCategory.photo}
            onChange={(e) =>
              editingCategory
                ? setEditingCategory({ ...editingCategory, photo: e.target.value })
                : setNewCategory({ ...newCategory, photo: e.target.value })
            }
            className="mt-1 p-2 border-4 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="categoryName"
            placeholder="Enter category name"
            value={editingCategory ? editingCategory.name : newCategory.name}
            onChange={(e) =>
              editingCategory
                ? setEditingCategory({ ...editingCategory, name: e.target.value })
                : setNewCategory({ ...newCategory, name: e.target.value })
            }
            className="mt-1 p-2 border-4 rounded w-full"
          />
        </div>
      </div>
      <button
        onClick={editingCategory ? handleUpdateCategory : handleCreateCategory}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingCategory ? 'Update Category' : 'Create Category'}
      </button>
    </div>
  );
};

export default CategoryList;
