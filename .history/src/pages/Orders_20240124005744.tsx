import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Order {
  id: string;
  product: Product;
  quantity: number;
  totalPrice: number;
}

interface OrderProps {
  orders: Order[];
  onCreateOrder: (newOrder: Order) => void;
  onDeleteOrder: (orderId: string) => void;
  onUpdateOrder: (orderId: string, updatedOrder: Order) => void;
}

const Orders: React.FC<OrderProps> = ({ orders, onCreateOrder, onDeleteOrder, onUpdateOrder }) => {
  const [newOrder, setNewOrder] = useState<Order>({
    id: '',
    product: { id: '', name: '', price: 0, image: '' },
    quantity: 0,
    totalPrice: 0,
  });

  const handleCreateOrder = () => {
    onCreateOrder(newOrder);
    clearNewOrder();
  };

  const handleDeleteOrder = (orderId: string) => {
    onDeleteOrder(orderId);
  };

  const handleUpdateOrder = (orderId: string, updatedOrder: Order) => {
    onUpdateOrder(orderId, updatedOrder);
    clearNewOrder();
  };

  const clearNewOrder = () => {
    setNewOrder({
      id: '',
      product: { id: '', name: '', price: 0, image: '' },
      quantity: 0,
      totalPrice: 0,
    });
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <table className="min-w-full bg-white border border-gray-300 justify-between">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-r">Order ID</th>
            <th className="py-2 px-4 border-r">Product Name</th>
            <th className="py-2 px-4 border-r">Quantity</th>
            <th className="py-2 px-4">Total Price</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order) => (
  <tr key={order.id} className="border-b">
    <td className="py-2 px-4 border-r">{order.id}</td>
    <td className="py-2 px-4 border-r">{order.product ? order.product.name : 'N/A'}</td>
    <td className="py-2 px-4 border-r">{order.quantity}</td>
    <td className="py-2 px-4">${order.totalPrice.toFixed(2)}</td>
    <td className="py-2 px-4">
      <button onClick={() => handleDeleteOrder(order.id)} className="text-red-500 mr-2">
        Delete
      </button>
      <button onClick={() => handleUpdateOrder(order.id, order)} className="text-blue-500">
        Update
      </button>
    </td>
  </tr>
))}

        </tbody>
      </table>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Create New Order</h3>
        <div className="flex items-center">
          <label className="mr-2">Product Name:</label>
          <input
            type="text"
            value={newOrder.product.name}
            onChange={(e) => setNewOrder({ ...newOrder, product: { ...newOrder.product, name: e.target.value } })}
            className="border p-2"
          />
        </div>
        <div className="flex items-center mt-2">
          <label className="mr-2">Quantity:</label>
          <input
            type="number"
            value={newOrder.quantity}
            onChange={(e) => setNewOrder({ ...newOrder, quantity: parseInt(e.target.value, 10) || 0 })}
            className="border p-2"
          />
        </div>
        {/* Add more input fields for other order details if needed */}
        <button onClick={handleCreateOrder} className="bg-green-500 text-white py-2 px-4 mt-2">
          Create Order
        </button>
      </div>
    </div>
  );
};

export default Orders;
