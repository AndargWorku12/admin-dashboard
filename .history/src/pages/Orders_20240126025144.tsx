import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  // Add other properties as needed
}

interface Order {
  id: string;
  productId: string;
  quantity: number;
}

interface OrderListProps {
  orders: Order[];
  products: Product[];
  onCreate: (newOrder: Omit<Order, 'id'>) => void;
  onDelete: (orderId: string) => void;
  onUpdate: (orderId: string, newQuantity: number) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, products, onCreate, onDelete, onUpdate }) => {
  const [newOrder, setNewOrder] = useState<Omit<Order, 'id'>>({
    productId: '',
    quantity: 0,
  });
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  const handleCreateOrder = () => {
    if (newOrder.productId && newOrder.quantity > 0) {
      const product = products.find((p) => p.id === newOrder.productId);
      if (product) {
        onCreate({
          ...newOrder,
          id: Date.now().toString(),
        });
        setNewOrder({
          productId: '',
          quantity: 0,
        });
      }
    }
  };

  const handleUpdateOrder = () => {
    if (editingOrder && editingOrder.quantity > 0) {
      onUpdate(editingOrder.id, editingOrder.quantity);
      setEditingOrder(null);
    }
  };

  const handleDeleteOrder = (id: string) => {
    onDelete(id);
  };

  const handleEditOrder = (order: Order) => {
    setEditingOrder(order);
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-64 text-center ml-20">
      <h2 className="text-3xl font-bold mb-4 text-left">Order List</h2>
      <table className="w-full border border-cyan-700 w-max-80 shadow-2xl">
        <thead>
          <tr className=' bg-gray-800 text-white'>
            <th className="py-2">Product</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2">{products.find((p) => p.id === order.productId)?.name}</td>
              <td className="py-2">{order.quantity}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDeleteOrder(order.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditOrder(order)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-6 mb-4">
        {editingOrder ? 'Edit Order' : 'Create New Order'}
      </h2>
      <div className="grid grid-cols-2 gap-4 text-start">
        <div>
          <label htmlFor="orderProduct" className="block text-sm font-medium text-gray-700">
            Product:
          </label>
          <select
            id="orderProduct"
            value={editingOrder ? editingOrder.productId : newOrder.productId}
            onChange={(e) =>
              editingOrder
                ? setEditingOrder({ ...editingOrder, productId: e.target.value })
                : setNewOrder({ ...newOrder, productId: e.target.value })
            }
            className="mt-1 p-2 border-4 rounded w-full"
          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <input
            type="number"
            id="orderQuantity"
            placeholder='enter quantity'
            value={editingOrder ? editingOrder.quantity : newOrder.quantity}
            onChange={(e) =>
              editingOrder
                ? setEditingOrder({ ...editingOrder, quantity: +e.target.value })
                : setNewOrder({ ...newOrder, quantity: +e.target.value })
            }
            className="mt-1 p-2 border-4 rounded w-full"
          />
        </div>
      </div>
      <button
        onClick={editingOrder ? handleUpdateOrder : handleCreateOrder}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingOrder ? 'Update Order' : 'Create Order'}
      </button>
    </div>
  );
};

export default OrderList;






// import React, { useState } from 'react';

// interface Order {
//   id: string;
//   productName: string;
//   quantity: number;
//   totalPrice: number;
// }

// interface OrdersListProps {
//   orders: Order[];
//   onCreateOrder: (newOrder: Order) => void;
//   onDeleteOrder: (orderId: string) => void;
//   onUpdateOrder: (orderId: string, updatedOrder: Order) => void;
// }

// const Orders: React.FC<OrdersListProps> = ({ orders, onCreateOrder, onDeleteOrder, onUpdateOrder }) => {
//   const [newOrder, setNewOrder] = useState<Omit<Order, 'id'> & { id?: string }>({
//     productName: '',
//     quantity: 0,
//     totalPrice: 0,
//   });

//   const [editingOrder, setEditingOrder] = useState<Order | null>(null);

//   const handleCreateOrUpdateOrder = () => {
//     const orderDetails = editingOrder || newOrder;

//     if (editingOrder && editingOrder.id) {
//   onUpdateOrder(editingOrder.id, orderDetails as Order);
//   setEditingOrder(null);
// } else {
//   onCreateOrder({ ...orderDetails, id: Date.now().toString() } as Order);
// }
//   };

//   const handleDeleteOrder = (id: string) => {
//     onDeleteOrder(id);
//   };

//   const handleEditOrder = (order: Order) => {
//     setEditingOrder(order);
//   };

//   return (
//     <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-8 text-center">
//       <h2 className="text-3xl font-bold mb-4">Orders List</h2>
//       <table className="w-full border border-cyan-700 w-max-80">
//         <thead>
//           <tr className='bg-gray-800 text-white'>
//             <th className="py-2">Product Name</th>
//             <th className="py-2">Quantity</th>
//             <th className="py-2">Total Price</th>
//             <th className="py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id} className="border-b">
//               <td className="py-2">{order.productName}</td>
//               <td className="py-2">{order.quantity}</td>
//               <td className="py-2">${order.totalPrice.toFixed(2)}</td>
//               <td className="py-2">
//                 <button
//                   onClick={() => handleDeleteOrder(order.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleEditOrder(order)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="text-2xl font-bold mt-6 mb-4">
//         {editingOrder ? 'Edit Order' : 'Create New Order'}
//       </h2>
//       <div className="grid grid-cols-2 gap-4 text-start">
//         <div>
//           <label htmlFor="orderProductName" className="block text-sm font-medium text-gray-700">
//             Product Name:
//           </label>
//           <input
//             type="text"
//             id="orderProductName"
//             placeholder='enter product name'
//             value={editingOrder ? editingOrder.productName : newOrder.productName}
//             onChange={(e) =>
//               setEditingOrder({ ...editingOrder, productName: e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700">
//             Quantity:
//           </label>
//           <input
//             type="number"
//             id="orderQuantity"
//             placeholder='enter quantity'
//             value={editingOrder ? editingOrder.quantity : newOrder.quantity}
//             onChange={(e) =>
//               setEditingOrder({ ...editingOrder, quantity: +e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="orderTotalPrice" className="block text-sm font-medium text-gray-700">
//             Total Price:
//           </label>
//           <input
//             type="number"
//             id="orderTotalPrice"
//             placeholder='enter total price'
//             value={editingOrder ? editingOrder.totalPrice : newOrder.totalPrice}
//             onChange={(e) =>
//               setEditingOrder({ ...editingOrder, totalPrice: +e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//       </div>
//       <button
//         onClick={handleCreateOrUpdateOrder}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         {editingOrder ? 'Update Order' : 'Create Order'}
//       </button>
//     </div>
//   );
// };

// export default Orders;
