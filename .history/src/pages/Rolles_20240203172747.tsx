// src/components/RolesPage.tsx

import React, { useState, ChangeEvent } from 'react';
// import '../styles/roles.css';

interface Role {
  id: string;
  name: string;
  description: string;
}

const RolesPage: React.FC = () => {
  const initialRoles: Role[] = [
    { id: '1', name: 'Admin', description: 'Full access to all features' },
    { id: '2', name: 'Editor', description: 'Can edit content' },
    { id: '3', name: 'Viewer', description: 'Read-only access' },
    { id: '4', name: 'Moderator', description: 'Moderate user-generated content' },
    { id: '5', name: 'Guest', description: 'Limited access for guests' },
  ];

  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [newRole, setNewRole] = useState<Role>({
    id: '0',
    name: '',
    description: '',
  });
  const [roleToDelete, setRoleToDelete] = useState<string | null>(null);

  const handleAddRole = () => {
    setRoles([...roles, newRole]);
    setModalOpen(false);
    setNewRole({
      id: '0',
      name: '',
      description: '',
    });
  };

  const handleEditRole = (id: string) => {
    const roleToEdit = roles.find((role) => role.id === id);
    if (roleToEdit) {
      setNewRole({ ...roleToEdit });
      setModalOpen(true);
    }
  };

  const handleDeleteRole = (id: string) => {
    setRoleToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (roleToDelete !== null) {
      const updatedRoles = roles.filter((role) => role.id !== roleToDelete);
      setRoles(updatedRoles);
      setRoleToDelete(null);
      setConfirmModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setRoleToDelete(null);
    setConfirmModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 block with-shadow">
      <h1 className="text-lg font-semibold mb-4">Roles Management</h1>

      <button
        className="add__role bg-indigo-950 hover:bg-indigo-900 font-bold py-2 px-4 mb-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add Role
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
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.description}</td>
              <td>
                <button
                  className="text-indigo-900 hover:underline mr-2"
                  onClick={() => handleEditRole(role.id)}
                >
                  Edit
                </button>
                <button
                  className="text-pink-500 hover:underline"
                  onClick={() => handleDeleteRole(role.id)}
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
            <h2 className="text-2xl font-bold mb-4">{newRole.id ? 'Edit' : 'Add'} Role</h2>
            <label className="block mb-4">
              Name:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newRole.name}
                onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Description:
              <textarea
                className="form-input mt-1 block w-full"
                value={newRole.description}
                onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
              />
            </label>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={handleAddRole}
              >
                {newRole.id ? 'Save' : 'Add'}
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
            <p className="text-lg mb-4">Are you sure you want to delete this role?</p>
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

export default RolesPage;
