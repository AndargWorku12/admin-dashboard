

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface Order {
  id: string;
  photo: string | File;
  category: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrder, setNewOrder] = useState<Order>({
    id: '',
    photo: '',
    category: '',
    name: '',
    price: 0,
    quantity: 0,
    totalPrice: 0,
  });
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [deletingOrder, setDeletingOrder] = useState<Order | null>(null);
  const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const onDrop = (acceptedFiles: File[]) => {
    setNewOrder({ ...newOrder, photo: acceptedFiles[0] });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const createOrder = () => {
    setOrders([...orders, newOrder]);
    setNewOrder({
      id: '',
      photo: '',
      category: '',
      name: '',
      price: 0,
      quantity: 0,
      totalPrice: 0,
    });
    setAddModalOpen(false);
  };

  const updateOrder = () => {
    if (editingOrder) {
      const updatedOrders = orders.map((order) =>
        order.id === editingOrder.id ? { ...order, ...editingOrder } : order
      );
      setOrders(updatedOrders);
      setEditingOrder(null);
      setEditModalOpen(false);
    }
  };

  const deleteOrder = () => {
    if (deletingOrder) {
      const updatedOrders = orders.filter((order) => order.id !== deletingOrder.id);
      setOrders(updatedOrders);
      setDeletingOrder(null);
      setDeleteModalOpen(false);
    }
  };

  const confirmDelete = (order: Order) => {
    setDeletingOrder(order);
    setDeleteModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {/* Add Order Button */}
      <div className="mb-4">
        <button onClick={() => setAddModalOpen(true)} className="bg-green-500 text-white p-2 rounded">
          Add Order
        </button>
      </div>

      {/* Create Order Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            {/* Input fields for creating new order */}
            {/* ... */}
            <button onClick={createOrder} className="bg-blue-500 text-white p-2 rounded">
              Create
            </button>
            <button onClick={() => setAddModalOpen(false)} className="ml-2 bg-gray-400 text-white p-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Edit Order Modal */}
      {isEditModalOpen && editingOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            {/* Input fields for editing order */}
            {/* ... */}
            <button onClick={updateOrder} className="bg-blue-500 text-white p-2 rounded">
              Save
            </button>
            <button onClick={() => setEditModalOpen(false)} className="ml-2 bg-gray-400 text-white p-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && deletingOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-xl font-bold mb-4">Are you sure you want to delete this order?</p>
            <div className="flex justify-end">
              <button onClick={deleteOrder} className="bg-red-500 text-white p-2 rounded">
                Yes, Delete
              </button>
              <button onClick={() => setDeleteModalOpen(false)} className="ml-2 bg-gray-400 text-white p-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Photo</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Total Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{/* Display photo or placeholder */}</td>
                <td className="border p-2">{order.category}</td>
                <td className="border p-2">{order.name}</td>
                <td className="border p-2">{order.price}</td>
                <td className="border p-2">{order.quantity}</td>
                <td className="border p-2">{order.totalPrice}</td>
                <td className="border p-2">
                  <button
                    onClick={() => {
                      setEditingOrder(order);
                      setEditModalOpen(true);
                    }}
                    className="bg-yellow-500 text-white p-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(order)}
                    className="bg-red-500 text-white p-2 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;






// import React, { useState } from 'react';
// import OrderTable from './OrderTable';
// import OrderModal from './OrderModal';
// import '../styles/orders.css'
// interface Order {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   quantity: number;
//   photo: string;
//   totalPrice: number;
// }

// const Orders: React.FC = () => {
//   const [orders, setOrders] = useState<Order[]>([
//     {
//       id: '1',
//       name: 'Product A',
//       category: 'Category X',
//       price: 20,
//       quantity: 3,
//       photo: 'photo-url-1',
//       totalPrice: 60,
//     },
//     {
//       id: '1',
//       name: 'Product A',
//       category: 'Category X',
//       price: 20,
//       quantity: 3,
//       photo: 'photo-url-1',
//       totalPrice: 60,
//     },
//     {
//       id: '1',
//       name: 'Product A',
//       category: 'Category X',
//       price: 20,
//       quantity: 3,
//       photo: 'photo-url-1',
//       totalPrice: 60,
//     },
//     {
//       id: '1',
//       name: 'Product A',
//       category: 'Category X',
//       price: 20,
//       quantity: 3,
//       photo: 'photo-url-1',
//       totalPrice: 60,
//     },
//     {
//       id: '1',
//       name: 'Product A',
//       category: 'Category X',
//       price: 20,
//       quantity: 3,
//       photo: 'photo-url-1',
//       totalPrice: 60,
//     },
//     // Add more initial orders as needed
//   ]);

//   const [modalType, setModalType] = useState<'add' | 'edit' | null>(null);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const handleAdd = (newOrder: Order) => {
//     // For simplicity, generating a unique ID here (you may use a more robust method)
//     const id = (orders.length + 1).toString();
//     const updatedOrders = [...orders, { ...newOrder, id }];
//     setOrders(updatedOrders);
//     setModalType(null);
//   };

//   const handleEdit = (editedOrder: Order) => {
//     const updatedOrders = orders.map((order) => (order.id === editedOrder.id ? editedOrder : order));
//     setOrders(updatedOrders);
//     setModalType(null);
//   };

//   const handleDelete = (id: string) => {
//     const shouldDelete = window.confirm('Are you sure you want to delete this order?');
//     if (shouldDelete) {
//       const updatedOrders = orders.filter((order) => order.id !== id);
//       setOrders(updatedOrders);
//     }
//   };

//   return (
//     <div className=" main container mx-auto mt-10 p-6  rounded-lg shadow-lg block ">
//       <h1 className="text-3xl font-semibold mb-6 ">Order Page</h1>
//       <OrderTable
//         orders={orders}
//         onEdit={(order) => {
//           setModalType('edit');
//           setSelectedOrder(order);
//         }}
//         onDelete={(id) => handleDelete(id)}
//       />

//       {modalType && (
//         <OrderModal
//           type={modalType}
//           order={selectedOrder}
//           onClose={() => {
//             setModalType(null);
//             setSelectedOrder(null);
//           }}
//           onSave={(editedOrder) => (modalType === 'add' ? handleAdd(editedOrder) : handleEdit(editedOrder))}

//         />
//       )}

//       <button
//         onClick={() => setModalType('add')}
//         className="add px-4 py-2 rounded-md mt-6 "
//       >
//         Add Order
//       </button>
//     </div>
//   );
// };

// export default Orders;





