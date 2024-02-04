// src/components/PermissionPage.tsx

import React, { useState, ChangeEvent } from 'react';
// import '../styles/permission.css';

interface Permission {
  id: string;
  name: string;
  description: string;
}

const PermissionPage: React.FC = () => {
  const initialPermissions: Permission[] = [
    { id: '1', name: 'Read', description: 'Permission to read content' },
    { id: '2', name: 'Write', description: 'Permission to write content' },
    { id: '3', name: 'Delete', description: 'Permission to delete content' },
    { id: '4', name: 'Admin', description: 'Full administrative access' },
    { id: '5', name: 'Moderate', description: 'Permission to moderate content' },
  ];

  const [permissions, setPermissions] = useState<Permission[]>(initialPermissions);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [newPermission, setNewPermission] = useState<Permission>({
    id: '0',
    name: '',
    description: '',
  });
  const [permissionToDelete, setPermissionToDelete] = useState<string | null>(null);

  const handleAddPermission = () => {
    setPermissions([...permissions, newPermission]);
    setModalOpen(false);
    setNewPermission({
      id: '0',
      name: '',
      description: '',
    });
  };

  const handleEditPermission = (id: string) => {
    const permissionToEdit = permissions.find((permission) => permission.id === id);
    if (permissionToEdit) {
      setNewPermission({ ...permissionToEdit });
      setModalOpen(true);
    }
  };

  const handleDeletePermission = (id: string) => {
    setPermissionToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (permissionToDelete !== null) {
      const updatedPermissions = permissions.filter((permission) => permission.id !== permissionToDelete);
      setPermissions(updatedPermissions);
      setPermissionToDelete(null);
      setConfirmModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setPermissionToDelete(null);
    setConfirmModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 block with-shadow-lg">
      <h1 className="text-lg font-semibold mb-4">Permission Management</h1>

      <button
        className="add__permission bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-2 px-4 mb-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add Permission
      </button>

      <table className="w-full">
        <thead>
          <tr className='bg-gray-300'>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Description</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.id}</td>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
              <td>
                <button
                  className="text-indigo-900 hover:underline mr-2"
                  onClick={() => handleEditPermission(permission.id)}
                >
                  Edit
                </button>
                <button
                  className="text-pink-500 hover:underline"
                  onClick={() => handleDeletePermission(permission.id)}
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
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">{newPermission.id ? 'Edit' : 'Add'} Permission</h2>
            <label className="block mb-4">
              Name:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newPermission.name}
                onChange={(e) => setNewPermission({ ...newPermission, name: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Description:
              <textarea
                className="form-input mt-1 block w-full"
                value={newPermission.description}
                onChange={(e) => setNewPermission({ ...newPermission, description: e.target.value })}
              />
            </label>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={handleAddPermission}
              >
                {newPermission.id ? 'Save' : 'Add'}
              </button>
              <button
                className="bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
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
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <p className="text-lg mb-4">Are you sure you want to delete this permission?</p>
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

export default PermissionPage;
