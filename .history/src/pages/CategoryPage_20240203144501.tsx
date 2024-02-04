

import React, { useState, ChangeEvent } from 'react';

interface Category {
  id: string;
  photo: string;
  name: string;
  category: string;
  description: string;
  quantity: string;
}

const CategoryPage: React.FC = () => {
  const initialCategories: Category[] = [
    {
      id: '1',
      photo: 'https://example.com/photo1.jpg',
      name: 'Category 1',
      category: 'Electronics',
      description: 'Description for category 1',
      quantity: '10',
    },
    {
      id: '2',
      photo: 'https://example.com/photo2.jpg',
      name: 'Category 2',
      category: 'Clothing',
      description: 'Description for category 2',
      quantity: '20',
    },
    // Add more sample data as needed
  ];

  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<Category>({
    id: '',
    photo: '',
    name: '',
    category: '',
    description: '',
    quantity: '',
  });
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);

  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    setModalOpen(false);
    setNewCategory({
      id: '',
      photo: '',
      name: '',
      category: '',
      description: '',
      quantity: '',
    });
  };

  const handleEditCategory = (id: string) => {
    const categoryToEdit = categories.find((category) => category.id === id);
    if (categoryToEdit) {
      setNewCategory({ ...categoryToEdit });
      setModalOpen(true);
    }
  };

  const handleDeleteCategory = (id: string) => {
    setCategoryToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete !== null) {
      const updatedCategories = categories.filter((category) => category.id !== categoryToDelete);
      setCategories(updatedCategories);
      setCategoryToDelete(null);
      setConfirmModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setCategoryToDelete(null);
    setConfirmModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 block">
      <h1 className="text-lg font-semibold mb-4">Categories</h1>

      <button
        className="add__category font-bold py-2 px-4 mb-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add Category
      </button>

      <table className="w-full shadow-2xl">
        <thead>
          <tr className='bg-gray-300'>
            <th className="text-left">ID</th>
            <th className="text-left">Photo</th>
            <th className="text-left">Name</th>
            <th className="text-left">Category</th>
            <th className="text-left">Description</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>
                {category.photo && (
                  <img src={category.photo} alt={`Category ${category.name}`} className="w-20 h-20 object-cover" />
                )}
              </td>
              <td>{category.name}</td>
              <td>{category.category}</td>
              <td>{category.description}</td>
              <td>{category.quantity}</td>
              <td>
                <button
                  className=" text-indigo-900 hover:underline mr-2"
                  onClick={() => handleEditCategory(category.id)}
                >
                  Edit
                </button>
                <button
                  className="text-pink-500 hover:underline"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{newCategory.id ? 'Edit' : 'Add'} Category</h2>
            <label className="block mb-4">
              Name:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Category:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newCategory.category}
                onChange={(e) => setNewCategory({ ...newCategory, category: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Description:
              <textarea
                className="form-input mt-1 block w-full"
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Quantity:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newCategory.quantity}
                onChange={(e) => setNewCategory({ ...newCategory, quantity: e.target.value })}
              />
            </label>
            <div className="mb-4">
              <label
                className={`cursor-pointer inline-block px-4 py-2 border rounded-md ${
                  newCategory.photo ? 'bg-green-100 hover:bg-green-200' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {newCategory.photo ? 'Change Photo' : 'Drag & Drop or Click to Upload Photo'}
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={() => {}} // Add your file input change handler here
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={handleAddCategory}
              >
                {newCategory.id ? 'Save' : 'Add'}
              </button>
              <button
                className=" bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg mb-4">Are you sure you want to delete this category?</p>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;














// // CategoryPage.tsx

// import React, { useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import '../styles/category.css'
// interface Category {
//   id: string;
//   name: string;
//   photo: string | File;
//   description: string;
// }

// const CategoryPage: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [newCategory, setNewCategory] = useState<Category>({ id: '0', name: '', photo: '', description: '' });
//   const [editingCategory, setEditingCategory] = useState<Category | null>(null);
//   const [deletingCategory, setDeletingCategory] = useState<Category | null>(null);
//   const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);

//   // Fetch categories on component mount
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     // Replace with your actual API call to fetch categories
//     setTimeout(() => {
//       const fetchedCategories: Category[] = [
//         { id: '1', name: 'Category 1', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 1' },
//         { id: '2', name: 'Category 2', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 2' },
//         { id: '3', name: 'Category 3', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 3' },
//         { id: '4', name: 'Category 4', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 4' },
//         { id: '5', name: 'Category 5', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 5' },
//         { id: '6', name: 'Category 6', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 6' },
//         { id: '7', name: 'Category 7', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 7' },
//         { id: '8', name: 'Category 8', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 8' },
//         { id: '9', name: 'Category 9', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 9' },
//         { id: '10', name: 'Category 10', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 10' },
//       ];
//       setCategories(fetchedCategories);
//     }, 500); // Simulating a delay for asynchronous API call
//   };

//   const createCategory = async () => {
//     // Replace with your actual API call to create a category
//     setTimeout(() => {
//       console.log('Creating category:', newCategory);
//       setNewCategory({ id: '0', name: '', photo: '', description: '' });
//       setAddModalOpen(false); // Close the modal after creating a new category
//       fetchCategories(); // Refresh the list after creating a new category
//     }, 500); // Simulating a delay for asynchronous API call
//   };

//   const updateCategory = async (updatedCategory: Category) => {
//     // Replace with your actual API call to update a category
//     setTimeout(() => {
//       console.log('Updating category:', updatedCategory);
//       setEditingCategory(null);
//       fetchCategories(); // Refresh the list after updating a category
//     }, 500); // Simulating a delay for asynchronous API call
//   };

//   const deleteCategory = async (categoryId: string) => {
//     // Replace with your actual API call to delete a category
//     setTimeout(() => {
//       console.log('Deleting category with ID:', categoryId);
//       setDeletingCategory(null);
//       fetchCategories(); // Refresh the list after deleting a category
//     }, 500); // Simulating a delay for asynchronous API call
//   };

//   const onDrop = (acceptedFiles: File[]) => {
//     setNewCategory({ ...newCategory, photo: acceptedFiles[0] });
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const confirmDelete = (category: Category) => {
//     setDeletingCategory(category);
//   };

//   return (
//     <div className="container mx-auto p-4 block">
//       <h1 className="text-2xl font-bold mb-14"> List of Categories</h1>
      
//       {/* Add Category Button */}
//       <div className="mb-4">
//         <button onClick={() => setAddModalOpen(true)} className="add p-2 rounded">Add Category</button>
//       </div>

//       {/* Create Category Modal */}
//       {isAddModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4">Add Category</h2>
//             <input
//               type="text"
//               placeholder="Name"
//               value={newCategory.name}
//               onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
//               className="p-2 mb-2 border rounded"
//             />
//             <div {...getRootProps()} className={`p-2 border rounded ${isDragActive ? 'bg-gray-200' : ''}`}>
//               <input {...getInputProps()} />
//               {newCategory.photo instanceof File ? (
//                 <p>Photo uploaded: {newCategory.photo.name}</p>
//               ) : (
//                 <p>Drag 'n' drop a photo here, or click to select one</p>
//               )}
//             </div>
//             <input
//               type="text"
//               placeholder="Description"
//               value={newCategory.description}
//               onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
//               className="p-2 mb-2 border rounded"
//             />
//             <div className="flex justify-end">
//               <button onClick={createCategory} className="cat__create text-white p-2 rounded">Create</button>
//               <button onClick={() => setAddModalOpen(false)} className="cat__cancel ml-2 text-white p-2 rounded">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Display Categories */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//   {categories.map((category) => (
//     <div key={category.id} className="bg-white p-4 rounded-lg shadow-lg">
//       <img
//         src={category.photo instanceof File ? URL.createObjectURL(category.photo) : category.photo}
//         alt={category.name}
//         className="mb-2 w-full h-32 object-cover rounded"
//       />
//       <div>
//         <h2 className="text-lg font-bold mb-2">{category.name}</h2>
//         <p className="text-gray-600">{category.description}</p>
//         <div className="mt-4 flex space-x-2 justify-end">
//           <button onClick={() => setEditingCategory(category)} className="cat__create p-2 rounded">
//             Edit
//           </button>
//           <button onClick={() => confirmDelete(category)} className="cat__cancel p-2 rounded">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>


//       {/* <div className="flex space-x-4 col-span-4">
//         {categories.map((category) => (
//           <div key={category.id} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg">
//             <img src={category.photo instanceof File ? URL.createObjectURL(category.photo) : category.photo} alt={category.name}
//              className="mb-2 w-full h-32 object-cover rounded" />
//             <div>
//               <h2 className="text-lg font-bold mb-2">{category.name}</h2>
//               <p className="text-gray-600">{category.description}</p>
//               <div className="mt-4 flex space-x-2 justify-end">
//                 <button onClick={() => setEditingCategory(category)} className="cat__create p-2 rounded ">Edit</button>
//                 <button onClick={() => confirmDelete(category)} className="cat__cancel p-2 rounded ">Delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}

//       {/* Edit Category Modal */}
//       {editingCategory && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4">Edit Category</h2>
//             <input
//               type="text"
//               placeholder="Name"
//               value={editingCategory.name}
//               onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
//               className="p-2 mb-2 border rounded"
//             />
//             <div {...getRootProps()} className={`p-2 border rounded ${isDragActive ? 'bg-gray-200' : ''}`}>
//               <input {...getInputProps()} />
//               {editingCategory.photo instanceof File ? (
//                 <p>Photo uploaded: {editingCategory.photo.name}</p>
//               ) : (
//                 <p>Drag 'n' drop a photo here, or click to select one</p>
//               )}
//             </div>
//             <input
//               type="text"
//               placeholder="Description"
//               value={editingCategory.description}
//               onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
//               className="p-2 mb-2 border rounded"
//             />
//             <div className="flex justify-end">
//               <button onClick={() => updateCategory(editingCategory)} className="cat__create p-2 rounded">Save</button>
//               <button onClick={() => setEditingCategory(null)} className="cat__cancel ml-2  p-2 rounded">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {deletingCategory && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg">
//             <p className="text-lg font-semibold mb-4">Are you sure you want to delete {deletingCategory.name}?</p>
//             <div className="flex justify-end">
//               <button onClick={() => deleteCategory(deletingCategory.id)} className="cat__cancel p-2 rounded">Delete</button>
//               <button onClick={() => setDeletingCategory(null)} className="cat__create ml-2 p-2 rounded">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;
