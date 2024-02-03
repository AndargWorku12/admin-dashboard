// CategoryPage.tsx

import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import '../styles/category.css'
interface Category {
  id: string;
  name: string;
  photo: string | File;
  description: string;
}

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<Category>({ id: '0', name: '', photo: '', description: '' });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [deletingCategory, setDeletingCategory] = useState<Category | null>(null);
  const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    // Replace with your actual API call to fetch categories
    setTimeout(() => {
      const fetchedCategories: Category[] = [
        { id: '1', name: 'Category 1', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 1' },
        { id: '2', name: 'Category 2', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 2' },
        { id: '3', name: 'Category 3', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 3' },
        { id: '4', name: 'Category 4', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 4' },
        { id: '5', name: 'Category 5', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 5' },
        { id: '6', name: 'Category 6', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 6' },
        { id: '7', name: 'Category 7', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 7' },
        { id: '8', name: 'Category 8', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 8' },
        { id: '9', name: 'Category 9', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 9' },
        { id: '10', name: 'Category 10', photo: 'https://st2.depositphotos.com/1203063/6365/i/380/depositphotos_63652973-stock-photo-3d-living-room-interior.jpg', description: 'Description for Category 10' },
      ];
      setCategories(fetchedCategories);
    }, 500); // Simulating a delay for asynchronous API call
  };

  const createCategory = async () => {
    // Replace with your actual API call to create a category
    setTimeout(() => {
      console.log('Creating category:', newCategory);
      setNewCategory({ id: '0', name: '', photo: '', description: '' });
      setAddModalOpen(false); // Close the modal after creating a new category
      fetchCategories(); // Refresh the list after creating a new category
    }, 500); // Simulating a delay for asynchronous API call
  };

  const updateCategory = async (updatedCategory: Category) => {
    // Replace with your actual API call to update a category
    setTimeout(() => {
      console.log('Updating category:', updatedCategory);
      setEditingCategory(null);
      fetchCategories(); // Refresh the list after updating a category
    }, 500); // Simulating a delay for asynchronous API call
  };

  const deleteCategory = async (categoryId: string) => {
    // Replace with your actual API call to delete a category
    setTimeout(() => {
      console.log('Deleting category with ID:', categoryId);
      setDeletingCategory(null);
      fetchCategories(); // Refresh the list after deleting a category
    }, 500); // Simulating a delay for asynchronous API call
  };

  const onDrop = (acceptedFiles: File[]) => {
    setNewCategory({ ...newCategory, photo: acceptedFiles[0] });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const confirmDelete = (category: Category) => {
    setDeletingCategory(category);
  };

  return (
    <div className="container mx-auto p-4 block">
      <h1 className="text-2xl font-bold mb-14"> List of Categories</h1>
      
      {/* Add Category Button */}
      <div className="mb-4">
        <button onClick={() => setAddModalOpen(true)} className="add p-2 rounded">Add Category</button>
      </div>

      {/* Create Category Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Category</h2>
            <input
              type="text"
              placeholder="Name"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              className="p-2 mb-2 border rounded"
            />
            <div {...getRootProps()} className={`p-2 border rounded ${isDragActive ? 'bg-gray-200' : ''}`}>
              <input {...getInputProps()} />
              {newCategory.photo instanceof File ? (
                <p>Photo uploaded: {newCategory.photo.name}</p>
              ) : (
                <p>Drag 'n' drop a photo here, or click to select one</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Description"
              value={newCategory.description}
              onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
              className="p-2 mb-2 border rounded"
            />
            <div className="flex justify-end">
              <button onClick={createCategory} className="cat__create text-white p-2 rounded">Create</button>
              <button onClick={() => setAddModalOpen(false)} className="cat__cancel ml-2 text-white p-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Display Categories */}
      <div className="flex space-x-4 col-span-4">
        {categories.map((category) => (
          <div key={category.id} className=" bg-white p-4 rounded-lg shadow-lg">
            <img src={category.photo instanceof File ? URL.createObjectURL(category.photo) : category.photo} alt={category.name}
             className="mb-2 w-full h-32 object-cover rounded" />
            <div>
              <h2 className="text-lg font-bold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
              <div className="mt-4 flex space-x-2 justify-end">
                <button onClick={() => setEditingCategory(category)} className="cat__create p-2 rounded ">Edit</button>
                <button onClick={() => confirmDelete(category)} className="cat__cancel p-2 rounded ">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Category Modal */}
      {editingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Category</h2>
            <input
              type="text"
              placeholder="Name"
              value={editingCategory.name}
              onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
              className="p-2 mb-2 border rounded"
            />
            <div {...getRootProps()} className={`p-2 border rounded ${isDragActive ? 'bg-gray-200' : ''}`}>
              <input {...getInputProps()} />
              {editingCategory.photo instanceof File ? (
                <p>Photo uploaded: {editingCategory.photo.name}</p>
              ) : (
                <p>Drag 'n' drop a photo here, or click to select one</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Description"
              value={editingCategory.description}
              onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
              className="p-2 mb-2 border rounded"
            />
            <div className="flex justify-end">
              <button onClick={() => updateCategory(editingCategory)} className="cat__create p-2 rounded">Save</button>
              <button onClick={() => setEditingCategory(null)} className="cat__cancel ml-2  p-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete {deletingCategory.name}?</p>
            <div className="flex justify-end">
              <button onClick={() => deleteCategory(deletingCategory.id)} className="cat__cancel p-2 rounded">Delete</button>
              <button onClick={() => setDeletingCategory(null)} className="cat__create ml-2 p-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
