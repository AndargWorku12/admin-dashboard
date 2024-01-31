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



// import React, { useState } from 'react';

// interface Category {
//   id: string;
//   photo: string;
//   name: string;
// }

// interface CategoryListProps {
//   categories: Category[];
//   onCreate: (newCategory: Omit<Category, 'id'> & { id?: string }) => void;
//   onDelete: (categoryId: string) => void;
//   onUpdate: (categoryId: string, newName: string) => void;
// }

// const CategoryList: React.FC<CategoryListProps> = ({
//   categories,
//   onCreate,
//   onDelete,
//   onUpdate,
// }) => {
//   const [newCategory, setNewCategory] = useState<Omit<Category, 'id'> & { id?: string }>({
//     photo: '',
//     name: '',
//   });
//   const [editingCategory, setEditingCategory] = useState<Category | null>(null);

//   const handleCreateCategory = () => {
//     onCreate({ ...newCategory, id: Date.now().toString() });
//     setNewCategory({
//       photo: '',
//       name: '',
//     });
//   };

//   const handleUpdateCategory = () => {
//     if (editingCategory) {
//       onUpdate(editingCategory.id, editingCategory.name);
//       setEditingCategory(null);
//     }
//   };

//   const handleDeleteCategory = (id: string) => {
//     onDelete(id);
//   };

//   const handleEditCategory = (category: Category) => {
//     setEditingCategory(category);
//   };

//   return (
//     <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-64 text-center">
    
//       <h2 className="text-3xl font-bold mb-4">Category List</h2>
//       <table className="w-full border border-cyan-700 w-max-80 shadow-2xl text-gray-500">
//         <thead>
//           <tr className="bg-gray-800 text-white">
//             <th className="py-2">Photo</th>
//             <th className="py-2">Name</th>
//             <th className="py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id} className="border-b">
//               <td>
//                 <img src={category.photo} alt={category.name} className="w-32 h-32 object-cover" />
//               </td>
//               <td className="py-2">{category.name}</td>
//               <td className="py-2">
//                 <button
//                   onClick={() => handleDeleteCategory(category.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleEditCategory(category)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="text-2xl font-bold mt-6 mb-4">
//         {editingCategory ? 'Edit Category' : 'Create New Category'}
//       </h2>
//       <div className="grid grid-cols-2 gap-4 text-start">
//         <div>
//           <label htmlFor="categoryPhoto" className="block text-sm font-medium text-gray-700">
//             Photo URL:
//           </label>
//           <input
//             type="text"
//             id="categoryPhoto"
//             placeholder="Enter photo URL"
//             value={editingCategory ? editingCategory.photo : newCategory.photo}
//             onChange={(e) =>
//               editingCategory
//                 ? setEditingCategory({ ...editingCategory, photo: e.target.value })
//                 : setNewCategory({ ...newCategory, photo: e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="categoryName"
//             placeholder="Enter category name"
//             value={editingCategory ? editingCategory.name : newCategory.name}
//             onChange={(e) =>
//               editingCategory
//                 ? setEditingCategory({ ...editingCategory, name: e.target.value })
//                 : setNewCategory({ ...newCategory, name: e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//       </div>
//       <button
//         onClick={editingCategory ? handleUpdateCategory : handleCreateCategory}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         {editingCategory ? 'Update Category' : 'Create Category'}
//       </button>
    
//     </div>
//   );
// };

// export default CategoryList;



// import React, { useState } from 'react';

// interface Category {
//   id: string;
//   photo: string;
//   name: string;
// }



//  interface CategoryListProps {
//   categories: Category[];
//   onCreateCategory: (newCategory: Omit<Category, 'id'> & { id?: string }) => void;
//   onDeleteCategory: (categoryId: string) => void;
//   onUpdateCategory: (categoryId: string, newName: string) => void;
//  }

// const CategoryList: React.FC<CategoryListProps> = ({
//   categories,
//   onCreateCategory,
//   onDeleteCategory,
//   onUpdateCategory,
// }) => {
//   const [newCategory, setNewCategory] = useState<Omit<Category, 'id'> & { id?: string }>({
//     photo: '',
//     name: '',
//   });
//   const [editingCategory, setEditingCategory] = useState<Category | null>(null);

//   const handleCreateCategory = () => {
//     onCreateCategory({ ...newCategory, id: Date.now().toString() });
//     setNewCategory({
//       photo: '',
//       name: '',
//     });
//   };

//   const handleUpdateCategory = () => {
//     if (editingCategory) {
//       onUpdateCategory(editingCategory.id, editingCategory.name);
//       setEditingCategory(null);
//     }
//   };

//   const handleDeleteCategory = (id: string) => {
//     onDeleteCategory(id);
//   };

//   const handleEditCategory = (category: Category) => {
//     setEditingCategory(category);
//   };

//   return (
//     <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-64 text-center">
//       <h2 className="text-3xl font-bold mb-4">Category List</h2>
//       <table className="w-full border border-cyan-700 w-max-80">
//         <thead>
//           <tr className="bg-gray-800 text-white">
//             <th className="py-2">Photo</th>
//             <th className="py-2">Name</th>
//             <th className="py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id} className="border-b">
//               <td>
//                 <img src={category.photo} alt={category.name} className="w-12 h-12 object-cover" />
//               </td>
//               <td className="py-2">{category.name}</td>
//               <td className="py-2">
//                 <button
//                   onClick={() => handleDeleteCategory(category.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleEditCategory(category)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="text-2xl font-bold mt-6 mb-4">
//         {editingCategory ? 'Edit Category' : 'Create New Category'}
//       </h2>
//       <div className="grid grid-cols-2 gap-4 text-start">
//         <div>
//           <label htmlFor="categoryPhoto" className="block text-sm font-medium text-gray-700">
//             Photo URL:
//           </label>
//           <input
//             type="text"
//             id="categoryPhoto"
//             placeholder="Enter photo URL"
//             value={editingCategory ? editingCategory.photo : newCategory.photo}
//             onChange={(e) =>
//               editingCategory
//                 ? setEditingCategory({ ...editingCategory, photo: e.target.value })
//                 : setNewCategory({ ...newCategory, photo: e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="categoryName"
//             placeholder="Enter category name"
//             value={editingCategory ? editingCategory.name : newCategory.name}
//             onChange={(e) =>
//               editingCategory
//                 ? setEditingCategory({ ...editingCategory, name: e.target.value })
//                 : setNewCategory({ ...newCategory, name: e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//       </div>
//       <button
//         onClick={editingCategory ? handleUpdateCategory : handleCreateCategory}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         {editingCategory ? 'Update Category' : 'Create Category'}
//       </button>
//     </div>
//   );
// };

// export default CategoryList;
