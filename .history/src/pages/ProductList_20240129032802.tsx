import React, { useState } from 'react';
import ProductForm from './ProductForm';
import PopupModal from '../components/PopupModal';

interface Product {
  id: string;
  photo: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
  date: string;
}

const sampleProducts: Product[] = [
  // ... (your sample products)
];

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<keyof Product>('id');
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [filterName, setFilterName] = useState<string>('');
  const [filterDate, setFilterDate] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 10;

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
    setModalOpen(false);
  };

  const handleEditProduct = (editedProduct: Product) => {
    setProducts(products.map((p) => (p.id === editedProduct.id ? editedProduct : p)));
    setModalOpen(false);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleSort = (column: keyof Product) => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortColumn(column);
    const sortedProducts = [...products].sort((a, b) =>
      newSortOrder === 'asc' ? a[column] > b[column] ? 1 : -1 : a[column] < b[column] ? 1 : -1
    );
    setProducts(sortedProducts);
  };

  const handleFilter = () => {
    const filtered = sampleProducts.filter(
      (product) =>
        (filterCategory === '' || product.category.includes(filterCategory)) &&
        (filterName === '' || product.name.includes(filterName)) &&
        (filterDate === '' || product.date.includes(filterDate))
    );
    setProducts(filtered);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastProduct = currentPage * rowsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mx-auto my-8">
      <button
        onClick={() => {
          setModalOpen(true);
          setSelectedProduct(null);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Product
      </button>
      {isModalOpen && (
        <PopupModal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedProduct(null);
          }}
        >
          <ProductForm
            product={selectedProduct}
            onAdd={handleAddProduct}
            onEdit={handleEditProduct}
          />
        </PopupModal>
      )}
      <div className="mb-4 flex flex-wrap">
        <label className="text-gray-700 mr-2">Filter by Category:</label>
        <input
          type="text"
          placeholder="Enter category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
        />
        <label className="text-gray-700 mr-2">Filter by Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
        />
        <label className="text-gray-700 mr-2">Filter by Date:</label>
        <input
          type="text"
          placeholder="Enter date (YYYY-MM-DD)"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Apply Filter
        </button>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 mr-2">Rows to Show:</label>
        <input
          type="number"
          value={rowsPerPage}
          onChange={(e) => setCurrentPage(1)}
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
        />
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-300">
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('id')}
              >
                ID
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('photo')}
              >
                Photo
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Name
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('price')}
              >
                Price
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('category')}
              >
                Category
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('quantity')}
              >
                Quantity
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('date')}
              >
                Date
              </th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">
                  <img src={product.photo} alt={product.name} className="object-cover w-48 h-48" />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">{product.date}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setSelectedProduct(product);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePrevPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={indexOfLastProduct >= products.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;



// import React, { useState } from 'react';
// import ProductForm from './ProductForm';
// import PopupModal from '../components/PopupModal';

// interface Product {
//   id: string;
//   photo: string;
//   name: string;
//   price: number;
//   category: string;
//   quantity: number;
//   date: string;
// }

// const sampleProducts: Product[] = [
//   { id: '1', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 1', price: 20, category: 'Category 1', quantity: 110, date: '2024-01-26' },
//   { id: '2', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 2', price: 22, category: 'Category 8', quantity: 102, date: '2024-01-24' },
//   { id: '3', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 3', price: 24, category: 'Category 9', quantity: 104, date: '2024-01-28' },
//   { id: '4', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 4', price: 27, category: 'Category 4', quantity: 106, date: '2024-01-29' },
//   { id: '5', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 5', price: 28, category: 'Category 7', quantity: 107, date: '2024-01-21' },
//   { id: '6', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 6', price: 29, category: 'Category 5', quantity: 108, date: '2024-01-23' },
//   { id: '7', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 7', price: 200, category: 'Category 3', quantity: 100, date: '2024-01-25' },
//   { id: '8', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 8', price: 206, category: 'Category 2', quantity: 1021, date: '2024-01-28' },
//   { id: '9', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 9', price: 201, category: 'Category 6', quantity: 105, date: '2024-01-20' },
//   { id: '10', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 10', price: 207, category: 'Category 11', quantity: 110, date: '2024-01-19' },
//   { id: '11', photo: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg', name: 'Product 11', price: 270, category: 'Category 10', quantity: 140, date: '2024-01-18' },
//   // ... (your sample products)
// ];

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>(sampleProducts);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
//   const [sortColumn, setSortColumn] = useState<keyof Product>('id');
//   const [filterCategory, setFilterCategory] = useState<string>('');
//   const [filterName, setFilterName] = useState<string>('');
//   const [filterDate, setFilterDate] = useState<string>('');
//   const [rowsToShow, setRowsToShow] = useState<number>(10);

//   const handleAddProduct = (newProduct: Product) => {
//     setProducts([...products, newProduct]);
//     setModalOpen(false);
//   };

//   const handleEditProduct = (editedProduct: Product) => {
//     setProducts(products.map((p) => (p.id === editedProduct.id ? editedProduct : p)));
//     setModalOpen(false);
//   };

//   const handleDeleteProduct = (productId: string) => {
//     setProducts(products.filter((p) => p.id !== productId));
//   };

//   const handleSort = (column: keyof Product) => {
//     const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
//     setSortOrder(newSortOrder);
//     setSortColumn(column);
//     const sortedProducts = [...products].sort((a, b) =>
//       newSortOrder === 'asc' ? a[column] > b[column] ? 1 : -1 : a[column] < b[column] ? 1 : -1
//     );
//     setProducts(sortedProducts);
//   };

//   const handleFilter = () => {
//     const filtered = sampleProducts.filter(
//       (product) =>
//         (filterCategory === '' || product.category.includes(filterCategory)) &&
//         (filterName === '' || product.name.includes(filterName)) &&
//         (filterDate === '' || product.date.includes(filterDate))
//     );
//     setProducts(filtered);
//   };

//   return (
//     <div className="container mx-auto my-8">
//       <button
//         onClick={() => {
//           setModalOpen(true);
//           setSelectedProduct(null);
//         }}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
//       >
//         Add Product
//       </button>
//       {isModalOpen && (
//         <PopupModal
//           isOpen={isModalOpen}
//           onClose={() => {
//             setModalOpen(false);
//             setSelectedProduct(null);
//           }}
//         >
//           <ProductForm
//             product={selectedProduct}
//             onAdd={handleAddProduct}
//             onEdit={handleEditProduct}
//           />
//         </PopupModal>
//       )}
//       <div className="mb-4">
//         <label className="text-gray-700 mr-2">Filter by Category:</label>
//         <input
//           type="text"
//           placeholder="Enter category"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//           className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//         />
//         <label className="text-gray-700 mr-2">Filter by Name:</label>
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={filterName}
//           onChange={(e) => setFilterName(e.target.value)}
//           className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//         />
//         <label className="text-gray-700 mr-2">Filter by Date:</label>
//         <input
//           type="text"
//           placeholder="Enter date (YYYY-MM-DD)"
//           value={filterDate}
//           onChange={(e) => setFilterDate(e.target.value)}
//           className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//         />
//         <button
//           onClick={handleFilter}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Apply Filter
//         </button>
//       </div>
//       <div className="mb-4">
//         <label className="text-gray-700 mr-2">Rows to Show:</label>
//         <input
//           type="number"
//           value={rowsToShow}
//           onChange={(e) => setRowsToShow(Number(e.target.value))}
//           className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//         />
//       </div>
//       <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//         <table className="w-full table-auto">
//           <thead>
//             <tr className="bg-gray-300">
//               <th
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => handleSort('id')}
//               >
//                 ID
//               </th>
//               <th
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => handleSort('photo')}
//               >
//                 Photo
//               </th>
//               <th
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => handleSort('name')}
//               >
//                 Name
//               </th>
//               <th
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => handleSort('price')}
//               >
//                 Price
//               </th>
//               <th
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => handleSort('category')}
//               >
//                 Category
//               </th>
//               <th
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => handleSort('quantity')}
//               >
//                 Quantity
//               </th>
//               <th
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => handleSort('date')}
//               >
//                 Date
//               </th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.slice(0, rowsToShow).map((product) => (
//               <tr key={product.id} className="border-t">
//                 <td className="px-4 py-2">{product.id}</td>
//                 <td className="px-4 py-2">
//                   <img src={product.photo} alt={product.name} className=" object-cover w-48 h-48" />
//                 </td>
//                 <td className="px-4 py-2">{product.name}</td>
//                 <td className="px-4 py-2">{product.price}</td>
//                 <td className="px-4 py-2">{product.category}</td>
//                 <td className="px-4 py-2">{product.quantity}</td>
//                 <td className="px-4 py-2">{product.date}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     onClick={() => {
//                       setModalOpen(true);
//                       setSelectedProduct(product);
//                     }}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteProduct(product.id)}
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductList;












// // import React, { useState } from 'react';

// // interface Product {
// //   id: string;
// //   photo: string;
// //   name: string;
// //   price: number;
// //   category: string;
// // }

// // interface ProductListProps {
// //   products: Product[];
// //   onCreate: (newProduct: Omit<Product, 'id'> & { id?: string }) => void;
// //   onDelete: (productId: string) => void;
// //   onUpdate: (productId: string, newName: string, newPrice: number) => void;
// // }

// // const ProductList: React.FC<ProductListProps> = ({ products, onCreate, onDelete, onUpdate }) => {
// //   const [newProduct, setNewProduct] = useState<Omit<Product, 'id'> & { id?: string }>({
// //     photo: '',
// //     name: '',
// //     price: 0,
// //     category: '',
// //   });
// //   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

// //   const handleCreateProduct = () => {
// //     onCreate({ ...newProduct, id: Date.now().toString() });
// //     setNewProduct({
// //       photo: '',
// //       name: '',
// //       price: 0,
// //       category: '',
// //     });
// //   };

// //   const handleUpdateProduct = () => {
// //     if (editingProduct) {
// //       onUpdate(editingProduct.id, editingProduct.name, editingProduct.price);
// //       setEditingProduct(null);
// //     }
// //   };

// //   const handleDeleteProduct = (id: string) => {
// //     onDelete(id);
// //   };

// //   const handleEditProduct = (product: Product) => {
// //     setEditingProduct(product);
// //   };

// //   return (
// //     <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-64 text-center ml-20">
// //       <h2 className="text-3xl font-bold mb-4 text-left">Product List</h2>
// //       <table className="w-full border border-cyan-700 w-max-80 shadow-2xl">
// //         <thead>
// //           <tr className=' bg-gray-800 text-white'>
// //             <th className="py-2">Photo</th>
// //             <th className="py-2">Name</th>
// //             <th className="py-2">Price</th>
// //             <th className="py-2">Category</th>
// //             <th className="py-2">Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {products.map((product) => (
// //             <tr key={product.id} className="border-b">
// //               <td>
// //                 <img src={product.photo} alt={product.name} className="w-28 h-26 object-cover" />
// //               </td>
// //               <td className="py-2">{product.name}</td>
// //               <td className="py-2">${product.price.toFixed(2)}</td>
// //               <td className="py-2">{product.category}</td>
// //               <td className="py-2">
// //                 <button
// //                   onClick={() => handleDeleteProduct(product.id)}
// //                   className="bg-red-500 text-white px-2 py-1 rounded mr-2"
// //                 >
// //                   Delete
// //                 </button>
// //                 <button
// //                   onClick={() => handleEditProduct(product)}
// //                   className="bg-blue-500 text-white px-2 py-1 rounded"
// //                 >
// //                   Edit
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <h2 className="text-2xl font-bold mt-6 mb-4">
// //         {editingProduct ? 'Edit Product' : 'Create New Product'}
// //       </h2>
// //       <div className="grid grid-cols-2 gap-4 text-start">
// //         <div>
// //           <label htmlFor="productPhoto" className="block text-sm font-medium text-gray-700">
// //             Photo URL:
// //           </label>
// //           <input
// //             type="text"
// //             id="productPhoto"
// //             placeholder='enter photo url'
// //             value={editingProduct ? editingProduct.photo : newProduct.photo}
// //             onChange={(e) =>
// //               editingProduct
// //                 ? setEditingProduct({ ...editingProduct, photo: e.target.value })
// //                 : setNewProduct({ ...newProduct, photo: e.target.value })
// //             }
// //             className="mt-1 p-2 border-4 rounded w-full"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
// //             Name:
// //           </label>
// //           <input
// //             type="text"
// //             id="productName"
// //             placeholder='enter name'
// //             value={editingProduct ? editingProduct.name : newProduct.name}
// //             onChange={(e) =>
// //               editingProduct
// //                 ? setEditingProduct({ ...editingProduct, name: e.target.value })
// //                 : setNewProduct({ ...newProduct, name: e.target.value })
// //             }
// //             className="mt-1 p-2 border-4 rounded w-full"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
// //             Price:
// //           </label>
// //           <input
// //             type="number"
// //             id="productPrice"
// //             placeholder='enter price'
// //             value={editingProduct ? editingProduct.price : newProduct.price}
// //             onChange={(e) =>
// //               editingProduct
// //                 ? setEditingProduct({ ...editingProduct, price: +e.target.value })
// //                 : setNewProduct({ ...newProduct, price: +e.target.value })
// //             }
// //             className="mt-1 p-2 border-4 rounded w-full"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
// //             Category:
// //           </label>
// //           <input
// //             type="text"
// //             id="productCategory"
// //             placeholder='choose category'
// //             value={editingProduct ? editingProduct.category : newProduct.category}
// //             onChange={(e) =>
// //               editingProduct
// //                 ? setEditingProduct({ ...editingProduct, category: e.target.value })
// //                 : setNewProduct({ ...newProduct, category: e.target.value })
// //             }
// //             className="mt-1 p-2 border-4  rounded w-full"
// //           />
// //         </div>
// //       </div>
// //       <button
// //         onClick={editingProduct ? handleUpdateProduct : handleCreateProduct}
// //         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
// //       >
// //         {editingProduct ? 'Update Product' : 'Create Product'}
// //       </button>
// //     </div>
// //   );
// // };

// // export default ProductList;
