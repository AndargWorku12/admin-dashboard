import React, { useState, useEffect } from 'react';

interface Order {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  photo: string;
  totalPrice: number;
}

interface OrderModalProps {
  type: 'add' | 'edit';
  order: Order | null;
  onClose: () => void;
  onSave: (editedOrder: Order) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ type, order, onClose, onSave }) => {
  const [editedOrder, setEditedOrder] = useState<Order | null>(order || { id: '', name: '', category: '', price: 0, quantity: 0, photo: '', totalPrice: 0 });

  useEffect(() => {
    setEditedOrder(order || { id: '', name: '', category: '', price: 0, quantity: 0, photo: '', totalPrice: 0 });
  }, [order]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg w-1/2">
      <h2 className="text-2xl font-semibold mb-4">{type === 'add' ? 'Add Order' : 'Edit Order'}</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">ID:</label>
        <input
          type="text"
          name="id"
          value={editedOrder.id}
          onChange={handleChange}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={editedOrder.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Category:</label>
        <input
          type="text"
          name="category"
          value={editedOrder.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Price:</label>
        <input
          type="number"
          name="price"
          value={editedOrder.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={editedOrder.quantity}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Photo:</label>
        <input
          type="text"
          name="photo"
          value={editedOrder.photo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Total Price:</label>
        <input
          type="number"
          name="totalPrice"
          value={editedOrder.totalPrice}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => onSave(editedOrder)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
        <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
