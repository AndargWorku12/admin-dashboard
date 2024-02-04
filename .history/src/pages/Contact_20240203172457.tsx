// src/components/ContactPage.tsx

import React, { useState, ChangeEvent } from 'react';
// import '../styles/contact.css';

interface Contact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const ContactPage: React.FC = () => {
  const initialContacts: Contact[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '987-654-3210' },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com', phoneNumber: '456-789-0123' },
    { id: '4', name: 'Bob Williams', email: 'bob@example.com', phoneNumber: '789-012-3456' },
    { id: '5', name: 'Eva Davis', email: 'eva@example.com', phoneNumber: '234-567-8901' },
  ];

  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [newContact, setNewContact] = useState<Contact>({
    id: '0',
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [contactToDelete, setContactToDelete] = useState<string | null>(null);

  const handleAddContact = () => {
    setContacts([...contacts, newContact]);
    setModalOpen(false);
    setNewContact({
      id: '0',
      name: '',
      email: '',
      phoneNumber: '',
    });
  };

  const handleEditContact = (id: string) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    if (contactToEdit) {
      setNewContact({ ...contactToEdit });
      setModalOpen(true);
    }
  };

  const handleDeleteContact = (id: string) => {
    setContactToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (contactToDelete !== null) {
      const updatedContacts = contacts.filter((contact) => contact.id !== contactToDelete);
      setContacts(updatedContacts);
      setContactToDelete(null);
      setConfirmModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setContactToDelete(null);
    setConfirmModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 block with-shadow-lg">
      <h1 className="text-lg font-semibold mb-4">Contact Management</h1>

      <button
        className="add__contact bg-indigo-950 font-bold py-2 px-4 mb-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add Contact
      </button>

      <table className="w-full">
        <thead>
          <tr className='bg-gray-300'>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Phone Number</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phoneNumber}</td>
              <td>
                <button
                  className="text-indigo-900 hover:underline mr-2"
                  onClick={() => handleEditContact(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="text-pink-500 hover:underline"
                  onClick={() => handleDeleteContact(contact.id)}
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
            <h2 className="text-2xl font-bold mb-4">{newContact.id ? 'Edit' : 'Add'} Contact</h2>
            <label className="block mb-4">
              Name:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Email:
              <input
                type="email"
                className="form-input mt-1 block w-full"
                value={newContact.email}
                onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Phone Number:
              <input
                type="tel"
                className="form-input mt-1 block w-full"
                value={newContact.phoneNumber}
                onChange={(e) => setNewContact({ ...newContact, phoneNumber: e.target.value })}
              />
            </label>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={handleAddContact}
              >
                {newContact.id ? 'Save' : 'Add'}
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
            <p className="text-lg mb-4">Are you sure you want to delete this contact?</p>
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

export default ContactPage;
