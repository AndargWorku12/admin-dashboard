import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Order {
  id: number;
  product: Product;
  quantity: number;
  totalPrice: number;
}

interface OrderProps {
  orders: Order[];
}

const Orders: React.FC<OrderProps> = ({ orders }) => {
  return (
    <div>
      <h2>Order History</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product.name}</td>
              <td>{order.quantity}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
