import React from 'react';

interface ProductRowProps {
  image: string;
  name: string;
  price: number;
  
}

const ProductRow: React.FC<ProductRowProps> = ({ image, name, price }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={image} className="w-16 md:w-32 max-w-full max-h-full" alt={name} />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {name}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
          </button>
          <div>
            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
          </div>
          <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        ${price}
      </td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
      </td>
    </tr>
  );
};

const ProductTable: React.FC = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductRow image="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp" name="Apple Watch" price={599} />
          <ProductRow image="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp" name="iMac 27" price={2499} />
          <ProductRow image="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp" name="IPhone 12" price={999} />
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;










// import React, { useState } from 'react';

// interface Product {
//   id: string;
//   photo: string;
//   name: string;
//   price: number;
//   category: string;
// }

// interface ProductListProps {
//   products: Product[];
//   onCreate: (newProduct: Omit<Product, 'id'> & { id?: string }) => void;
//   onDelete: (productId: string) => void;
//   onUpdate: (productId: string, newName: string, newPrice: number) => void;
// }

// const ProductList: React.FC<ProductListProps> = ({ products, onCreate, onDelete, onUpdate }) => {
//   const [newProduct, setNewProduct] = useState<Omit<Product, 'id'> & { id?: string }>({
//     photo: '',
//     name: '',
//     price: 0,
//     category: '',
//   });
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

//   const handleCreateProduct = () => {
//     onCreate({ ...newProduct, id: Date.now().toString() });
//     setNewProduct({
//       photo: '',
//       name: '',
//       price: 0,
//       category: '',
//     });
//   };

//   const handleUpdateProduct = () => {
//     if (editingProduct) {
//       onUpdate(editingProduct.id, editingProduct.name, editingProduct.price);
//       setEditingProduct(null);
//     }
//   };

//   const handleDeleteProduct = (id: string) => {
//     onDelete(id);
//   };

//   const handleEditProduct = (product: Product) => {
//     setEditingProduct(product);
//   };

//   return (
//     <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-64 text-center ml-20">
//       <h2 className="text-3xl font-bold mb-4 text-left">Product List</h2>
//       <table className="w-full border border-cyan-700 w-max-80 shadow-2xl">
//         <thead>
//           <tr className=' bg-gray-800 text-white'>
//             <th className="py-2">Photo</th>
//             <th className="py-2">Name</th>
//             <th className="py-2">Price</th>
//             <th className="py-2">Category</th>
//             <th className="py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id} className="border-b">
//               <td>
//                 <img src={product.photo} alt={product.name} className="w-28 h-26 object-cover" />
//               </td>
//               <td className="py-2">{product.name}</td>
//               <td className="py-2">${product.price.toFixed(2)}</td>
//               <td className="py-2">{product.category}</td>
//               <td className="py-2">
//                 <button
//                   onClick={() => handleDeleteProduct(product.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleEditProduct(product)}
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
//         {editingProduct ? 'Edit Product' : 'Create New Product'}
//       </h2>
//       <div className="grid grid-cols-2 gap-4 text-start">
//         <div>
//           <label htmlFor="productPhoto" className="block text-sm font-medium text-gray-700">
//             Photo URL:
//           </label>
//           <input
//             type="text"
//             id="productPhoto"
//             placeholder='enter photo url'
//             value={editingProduct ? editingProduct.photo : newProduct.photo}
//             onChange={(e) =>
//               editingProduct
//                 ? setEditingProduct({ ...editingProduct, photo: e.target.value })
//                 : setNewProduct({ ...newProduct, photo: e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="productName"
//             placeholder='enter name'
//             value={editingProduct ? editingProduct.name : newProduct.name}
//             onChange={(e) =>
//               editingProduct
//                 ? setEditingProduct({ ...editingProduct, name: e.target.value })
//                 : setNewProduct({ ...newProduct, name: e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
//             Price:
//           </label>
//           <input
//             type="number"
//             id="productPrice"
//             placeholder='enter price'
//             value={editingProduct ? editingProduct.price : newProduct.price}
//             onChange={(e) =>
//               editingProduct
//                 ? setEditingProduct({ ...editingProduct, price: +e.target.value })
//                 : setNewProduct({ ...newProduct, price: +e.target.value })
//             }
//             className="mt-1 p-2 border-4 rounded w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
//             Category:
//           </label>
//           <input
//             type="text"
//             id="productCategory"
//             placeholder='choose category'
//             value={editingProduct ? editingProduct.category : newProduct.category}
//             onChange={(e) =>
//               editingProduct
//                 ? setEditingProduct({ ...editingProduct, category: e.target.value })
//                 : setNewProduct({ ...newProduct, category: e.target.value })
//             }
//             className="mt-1 p-2 border-4  rounded w-full"
//           />
//         </div>
//       </div>
//       <button
//         onClick={editingProduct ? handleUpdateProduct : handleCreateProduct}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         {editingProduct ? 'Update Product' : 'Create Product'}
//       </button>
//     </div>
//   );
// };

// export default ProductList;
