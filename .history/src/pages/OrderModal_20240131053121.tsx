import React, { useState, useEffect } from 'react';

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
    <div>
      <h2>{type === 'add' ? 'Add Order' : 'Edit Order'}</h2>
      <label>ID:</label>
      <input type="text" name="id" value={editedOrder.id} onChange={handleChange} readOnly />
      <br />
      <label>Name:</label>
      <input type="text" name="name" value={editedOrder.name} onChange={handleChange} />
      <br />
      <label>Category:</label>
      <input type="text" name="category" value={editedOrder.category} onChange={handleChange} />
      <br />
      <label>Price:</label>
      <input type="number" name="price" value={editedOrder.price} onChange={handleChange} />
      <br />
      <label>Quantity:</label>
      <input type="number" name="quantity" value={editedOrder.quantity} onChange={handleChange} />
      <br />
      <label>Photo:</label>
      <input type="text" name="photo" value={editedOrder.photo} onChange={handleChange} />
      <br />
      <label>Total Price:</label>
      <input type="number" name="totalPrice" value={editedOrder.totalPrice} onChange={handleChange} />
      <br />
      <button onClick={() => onSave(editedOrder)}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default OrderModal;
