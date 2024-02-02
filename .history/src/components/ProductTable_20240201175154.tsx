import React, { useState } from 'react';
import ProductModal from './ProductModal';
import '../styles/productList.css'
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  date: string;
  photo: string;
}

interface ProductTableProps {
  products: Product[];
  onDelete: (id: string) => void;
  onEdit: (product: Product) => void;
  nightMode: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete, onEdit, nightMode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [filter, setFilter] = useState({ name: '', category: '', date: '' });

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleSort = (field: keyof Product) => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (a[field] > b[field]) return 1;
      if (a[field] < b[field]) return -1;
      return 0;
    });

    setSortedProducts(sorted);
  };

  const handleFilter = () => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        product.category.toLowerCase().includes(filter.category.toLowerCase()) &&
        product.date.includes(filter.date)
    );
    setSortedProducts(filtered);
  };

  return (
    <div
      className={`overflow-x-auto bg-white border border-gray-300 p-6 rounded-lg ${
        nightMode ? 'shadow-xl' : 'shadow-md'
      } transition duration-500 ease-in-out`}
    >
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <label className="mr-2"> Filter by Name:</label>
          <input
            type="text"
            value={filter.name}
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex items-center ml-4">
          <label className="mr-2"> Filter by Category:</label>
          <input
            type="text"
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex items-center ml-4">
          <label className="mr-2"> Filter by Date:</label>
          <input
            type="text"
            value={filter.date}
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
            className="border p-2 rounded-md"
          />
        </div>
        <button onClick={handleFilter} className={`night px-4 py-2 ml-4 rounded-md ${
            nightMode ? 'hover:bg-gray-600' : 'hover:bg-gray-700'
          }`}>
          Filter
        </button>
      </div>

      <table className="min-w-full border-b border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th onClick={() => handleSort('id')} className="py-2 px-4 border-r cursor-pointer">
              ID
            </th>
            <th className="py-2 px-4 border-r">Photo</th>
            <th onClick={() => handleSort('name')} className="py-2 px-4 border-r cursor-pointer">
              Name
            </th>
            <th onClick={() => handleSort('category')} className="py-2 px-4 border-r cursor-pointer">
              Category
            </th>
            <th onClick={() => handleSort('price')} className="py-2 px-4 border-r cursor-pointer">
              Price
            </th>
            <th onClick={() => handleSort('quantity')} className="py-2 px-4 border-r cursor-pointer">
              Quantity
            </th>
            <th onClick={() => handleSort('date')} className="py-2 px-4 border-r cursor-pointer">
              Date
            </th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-2 px-4 border-r">{product.id}</td>
              <td className="py-2 px-4 border-r">
                <img src={product.photo} alt={`Product ${product.name}`} className="max-w-32 h-auto" />
              </td>
              <td className="py-2 px-4 border-r">{product.name}</td>
              <td className="py-2 px-4 border-r">{product.category}</td>
              <td className="py-2 px-4 border-r">{product.price}</td>
              <td className="py-2 px-4 border-r">{product.quantity}</td>
              <td className="py-2 px-4 border-r">{product.date}</td>
              <td className="py-2 px-4">
                <button onClick={() => handleEdit(product)} className={`edit hover:underline mr-2 ${
                    nightMode ? 'hover:text-gray-300' : 'hover:text-gray-700'
                  }`}>
                  Edit
                </button>
                <button onClick={() => onDelete(product.id)} className={`delete hover:underline ${
                    nightMode ? 'hover:text-red-500' : 'hover:text-red-700'
                  }`}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setModalOpen(false);
            setSelectedProduct(null);
          }}
          onSave={(editedProduct) => {
            onEdit(editedProduct);
            setModalOpen(false);
            setSelectedProduct(null);
          }}
          nightMode={nightMode}
        />
      )}
    </div>
  );
};

export default ProductTable;