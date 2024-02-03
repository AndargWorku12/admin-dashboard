// CategoryPage.tsx

import React, { useState, useEffect } from 'react';

interface Category {
  id: number;
  name: string;
  photo: string;
  description: string;
}

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<Category>({ id: 0, name: '', photo: '', description: '' });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    // Replace with your actual API call to fetch categories
    const fetchedCategories: Category[] = await yourApiCallToFetchCategories();
    setCategories(fetchedCategories);
  };

  const createCategory = async () => {
    // Replace with your actual API call to create a category
    await yourApiCallToCreateCategory(newCategory);
    setNewCategory({ id: 0, name: '', photo: '', description: '' });
    fetchCategories(); // Refresh the list after creating a new category
  };

  const updateCategory = async (updatedCategory: Category) => {
    // Replace with your actual API call to update a category
    await yourApiCallToUpdateCategory(updatedCategory);
    setEditingCategory(null);
    fetchCategories(); // Refresh the list after updating a category
  };

  const deleteCategory = async (categoryId: number) => {
    // Replace with your actual API call to delete a category
    await yourApiCallToDeleteCategory(categoryId);
    fetchCategories(); // Refresh the list after deleting a category
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      
      {/* Create Category */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          className="p-2 mr-2 border rounded"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newCategory.photo}
          onChange={(e) => setNewCategory({ ...newCategory, photo: e.target.value })}
          className="p-2 mr-2 border rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
          className="p-2 mr-2 border rounded"
        />
        <button onClick={createCategory} className="bg-blue-500 text-white p-2 rounded">Create</button>
      </div>

      {/* Display Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={category.photo} alt={category.name} className="mb-2 w-full h-32 object-cover rounded" />
            <h2 className="text-lg font-bold mb-2">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
            <div className="mt-4 flex space-x-2">
              <button onClick={() => setEditingCategory(category)} className="bg-yellow-500 text-white p-2 rounded">Edit</button>
              <button onClick={() => deleteCategory(category.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Category Modal */}
      {editingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
            <input
              type="text"
              placeholder="Name"
              value={editingCategory.name}
              onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
              className="p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={editingCategory.photo}
              onChange={(e) => setEditingCategory({ ...editingCategory, photo: e.target.value })}
              className="p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={editingCategory.description}
              onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
              className="p-2 mb-2 border rounded"
            />
            <div className="flex justify-end">
              <button onClick={() => updateCategory(editingCategory)} className="bg-blue-500 text-white p-2 rounded">Save</button>
              <button onClick={() => setEditingCategory(null)} className="ml-2 bg-gray-400 text-white p-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;













// CategoryPage.tsx
// import React, { useState } from 'react';
// import CategoryDropdown from './CategoryDropdown';
// import CategoryModal from './CategoryModal';

// interface Category {
//   id: string;
//   name: string;
//   photo: string;
// }

// const CategoryPage: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([
//     { id: '1', name: 'Electronics', photo: '' },
//     { id: '2', name: 'Furniture', photo: '' },
//     { id: '3', name: 'Appliances', photo: '' },
//     { id: '4', name: 'Clothing', photo: '' },
//   ]);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
//   const [nightMode, setNightMode] = useState(false);

//   const handleAdd = (newCategory: Category) => {
//     const id = (categories.length + 1).toString();
//     const updatedCategories = [...categories, { ...newCategory, id }];
//     setCategories(updatedCategories);
//   };

//   const handleEdit = (editedCategory: Category) => {
//     const updatedCategories = categories.map((category) =>
//       category.id === editedCategory.id ? editedCategory : category
//     );
//     setCategories(updatedCategories);
//   };

//   const handleDelete = (id: string) => {
//     const updatedCategories = categories.filter((category) => category.id !== id);
//     setCategories(updatedCategories);
//   };

//   return (
//     <div className={`container mx-auto p-6 ${nightMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
//       <h1 className="text-3xl font-bold mb-6">Category Page</h1>

//       <CategoryDropdown
//         categories={categories}
//         onAdd={() => {
//           setModalOpen(true);
//           setSelectedCategory(null);
//         }}
//         onEdit={(category) => {
//           setModalOpen(true);
//           setSelectedCategory(category);
//         }}
//         onDelete={handleDelete}
//         nightMode={nightMode}
//       />

//       {modalOpen && (
//         <CategoryModal
//           category={selectedCategory}
//           onClose={() => {
//             setModalOpen(false);
//             setSelectedCategory(null);
//           }}
//           onSave={(editedCategory) => {
//             if (selectedCategory) {
//               handleEdit(editedCategory);
//             } else {
//               handleAdd(editedCategory);
//             }
//             setModalOpen(false);
//             setSelectedCategory(null);
//           }}
//           nightMode={nightMode}
//         />
//       )}
//     </div>
//   );
// };

// export default CategoryPage;
