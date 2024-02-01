import React, { useState } from 'react';
import OrderTable from './OrderTable';
import OrderModal from './OrderModal';

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
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg block">
      <h1 className="text-3xl font-semibold mb-6 text-white bg-gray-900">Order Page</h1>
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
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-600"
      >
        Add Order
      </button>
    </div>
  );
};

export default Orders;





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
