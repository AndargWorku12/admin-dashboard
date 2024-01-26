import React from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface Order {
  id: string;
  product: Product;
  quantity: number;
  totalPrice: number;
}

interface OrderProps {
  orders: Order[];
}

const Orders: React.FC<OrderProps> = ({ orders }) => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-r">Order ID</th>
            <th className="py-2 px-4 border-r">Product Name</th>
            <th className="py-2 px-4 border-r">Quantity</th>
            <th className="py-2 px-4">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2 px-4 border-r">{order.id}</td>
              <td className="py-2 px-4 border-r">{order.product.name}</td>
              <td className="py-2 px-4 border-r">{order.quantity}</td>
              <td className="py-2 px-4">${order.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
