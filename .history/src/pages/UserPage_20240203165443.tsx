// src/components/UserPage.tsx

import React, { useState, ChangeEvent } from 'react';
import '../styles/user.css';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  age: number;
  gender: string;
  status: string;
  photo: string; // New field for the user photo
}

const UserPage: React.FC = () => {
  const initialUsers: User[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', username: 'john_doe', email: 'john@example.com', age: 25, gender: 'Male', status: 'Active', photo: '' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', username: 'jane_smith', email: 'jane@example.com', age: 30, gender: 'Female', status: 'Inactive', photo: '' },
    { id: '3', firstName: 'Alice', lastName: 'Johnson', username: 'alice_j', email: 'alice@example.com', age: 28, gender: 'Female', status: 'Active', photo: '' },
    { id: '4', firstName: 'Bob', lastName: 'Williams', username: 'bob_w', email: 'bob@example.com', age: 22, gender: 'Male', status: 'Active', photo: '' },
    { id: '5', firstName: 'Eva', lastName: 'Davis', username: 'eva_d', email: 'eva@example.com', age: 35, gender: 'Female', status: 'Inactive', photo: '' },
  ];

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<User>({
    id: '0',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    age: 0,
    gender: '',
    status: '',
    photo: '',
  });
  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setModalOpen(false);
    setNewUser({
      id: '0',
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: 0,
      gender: '',
      status: '',
      photo: '',
    });
  };

  const handleEditUser = (id: string) => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setNewUser({ ...userToEdit });
      setModalOpen(true);
    }
  };

  const handleDeleteUser = (id: string) => {
    setUserToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (userToDelete !== null) {
      const updatedUsers = users.filter((user) => user.id !== userToDelete);
      setUsers(updatedUsers);
      setUserToDelete(null);
      setConfirmModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setUserToDelete(null);
    setConfirmModalOpen(false);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setNewUser({ ...newUser, photo: reader.result as string });
      };
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setNewUser({ ...newUser, photo: reader.result as string });
      };
    }
  };

  return (
    <div className="container mx-auto mt-8 block with-shadow">
      <h1 className="text-lg font-semibold mb-4">User Management</h1>

      <button
        className="add__user font-bold py-2 px-4 mb-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add User
      </button>

      <table className="w-full">
        <thead>
          <tr className='bg-gray-300'>
            <th className="text-left">ID</th>
            <th className="text-left">First Name</th>
            <th className="text-left">Last Name</th>
            <th className="text-left">Username</th>
            <th className="text-left">Email</th>
            <th className="text-left">Age</th>
            <th className="text-left">Gender</th>
            <th className="text-left">Status</th>
            <th className="text-left">Photo</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td>
                {user.photo && (
                  <img src={user.photo} alt={`User ${user.username}`} className="w-10 h-10 object-cover" />
                )}
              </td>
              <td>
                <button
                  className="text-indigo-900 hover:underline mr-2"
                  onClick={() => handleEditUser(user.id)}
                >
                  Edit
                </button>
                <button
                  className="text-pink-500 hover:underline"
                  onClick={() => handleDeleteUser(user.id)}
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
            <h2 className="text-2xl font-bold mb-4">{newUser.id ? 'Edit' : 'Add'} User</h2>
            <label className="block mb-4">
              First Name:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newUser.firstName}
                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Last Name:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newUser.lastName}
                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Username:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Email:
              <input
                type="email"
                className="form-input mt-1 block w-full"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Age:
              <input
                type="number"
                className="form-input mt-1 block w-full"
                value={newUser.age}
                onChange={(e) => setNewUser({ ...newUser, age: parseInt(e.target.value) || 0 })}
              />
            </label>
            <label className="block mb-4">
              Gender:
              <select
                className="form-select mt-1 block w-full"
                value={newUser.gender}
                onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="block mb-4">
              Status:
              <select
                className="form-select mt-1 block w-full"
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
            <div className="mb-4">
              <label
                className="cursor-pointer inline-block px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => handleFileDrop(e)}
              >
                {newUser.photo ? 'Change Photo' : 'Drag & Drop or Click to Upload Photo'}
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileInput}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={handleAddUser}
              >
                {newUser.id ? 'Save' : 'Add'}
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
            <p className="text-lg mb-4">Are you sure you want to delete this user?</p>
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

export default UserPage;
