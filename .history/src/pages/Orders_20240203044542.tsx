import React, { useState } from 'react';
import OrderTable from './OrderTable';
import OrderModal from './OrderModal';
import '../styles/orders.css'
interface Order {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  photo: string;
  totalPrice: number;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      name: 'Product A',
      category: 'Category X',
      price: 20,
      quantity: 3,
      photo: 'photo-url-1',
      totalPrice: 60,
    },
    {
      id: '1',
      name: 'Product A',
      category: 'Category X',
      price: 20,
      quantity: 3,
      photo: 'photo-url-1',
      totalPrice: 60,
    },
    {
      id: '1',
      name: 'Product A',
      category: 'Category X',
      price: 20,
      quantity: 3,
      photo: 'photo-url-1',
      totalPrice: 60,
    },
    {
      id: '1',
      name: 'Product A',
      category: 'Category X',
      price: 20,
      quantity: 3,
      photo: 'photo-url-1',
      totalPrice: 60,
    },
    {
      id: '1',
      name: 'Product A',
      category: 'Category X',
      price: 20,
      quantity: 3,
      photo: 'photo-url-1',
      totalPrice: 60,
    },
    // Add more initial orders as needed
  ]);

  const [modalType, setModalType] = useState<'add' | 'edit' | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleAdd = (newOrder: Order) => {
    // For simplicity, generating a unique ID here (you may use a more robust method)
    const id = (orders.length + 1).toString();
    const updatedOrders = [...orders, { ...newOrder, id }];
    setOrders(updatedOrders);
    setModalType(null);
  };

  const handleEdit = (editedOrder: Order) => {
    const updatedOrders = orders.map((order) => (order.id === editedOrder.id ? editedOrder : order));
    setOrders(updatedOrders);
    setModalType(null);
  };

  const handleDelete = (id: string) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this order?');
    if (shouldDelete) {
      const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
    }
  };

  return (
    <div className=" main container mx-auto mt-10 p-6  rounded-lg shadow-lg block ">
      <h1 className="text-3xl font-semibold mb-6 ">Order Page</h1>
      <OrderTable
        orders={orders}
        onEdit={(order) => {
          setModalType('edit');
          setSelectedOrder(order);
        }}
        onDelete={(id) => handleDelete(id)}
      />

      {modalType && (
        <OrderModal
          type={modalType}
          order={selectedOrder}
          onClose={() => {
            setModalType(null);
            setSelectedOrder(null);
          }}
          onSave={(editedOrder) => (modalType === 'add' ? handleAdd(editedOrder) : handleEdit(editedOrder))}

        />
      )}

      <button
        onClick={() => setModalType('add')}
        className="add px-4 py-2 rounded-md mt-6 "
      >
        Add Order
      </button>
    </div>
  );
};

export default Orders;





