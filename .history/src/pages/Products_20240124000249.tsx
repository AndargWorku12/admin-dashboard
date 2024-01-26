import React, { useState } from 'react';
import '../style/products.css';

// Define the structure of a product
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Define the properties that the Products component expects
interface ProductProps {
  products: Product[]; // Array of products
  onCreate: (product: Product) => void; // Function to create a new product
  onDelete: (id: string) => void; // Function to delete a product
  onUpdate: (id: string, newName: string, newPrice: number, newImage: string) => void; // Function to update a product
}

// Define the Products component
const Products: React.FC<ProductProps> = ({ products, onCreate, onDelete, onUpdate }) => {
  // State for handling new product input
  const [newProductName, setNewProductName] = useState<string>('');
  const [newProductPrice, setNewProductPrice] = useState<number>(0);
  const [newProductImage, setNewProductImage] = useState<string>('');

  // Function to handle creating a new product
  const handleCreate = () => {
    const newProduct: Product = {
      id: String(products.length + 1),
      name: newProductName,
      price: newProductPrice,
      image: newProductImage,
    };
    onCreate(newProduct);
    clearInputFields();
  };

  // Function to handle deleting a product
  const handleDelete = (id: string) => {
    onDelete(id);
  };

  // Function to handle updating a product
  const handleUpdate = (id: string, newName: string, newPrice: number, newImage: string) => {
    onUpdate(id, newName, newPrice, newImage);
    clearInputFields();
  };

  // Function to clear input fields
  const clearInputFields = () => {
    setNewProductName('');
    setNewProductPrice(0);
    setNewProductImage('');
  };

  // JSX for rendering the Products component
  return (
    <div className="product-container">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b border-r font-bold">Image</th>
            <th className="py-2 px-4 border-b border-r font-bold">Name</th>
            <th className="py-2 px-4 border-b border-r font-bold">Price</th>
            <th className="py-2 px-4 border-b font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-2 px-4 border-r">
                <img src={product.image} alt={product.name} className="w-10 h-10" />
              </td>
              <td className="py-2 px-4 border-r">{product.name}</td>
              <td className="py-2 px-4 border-r">{product.price}</td>
              <td className="py-2 px-4 flex items-center space-x-1">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
                <input
                  type="text"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  className="py-1 px-2 border font-bold"
                  placeholder="New Name"
                />
                <input
                  type="number"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(Number(e.target.value))}
                  className="py-1 px-2 border font-bold"
                  placeholder="New Price"
                />
                <input
                  type="text"
                  value={newProductImage}
                  onChange={(e) => setNewProductImage(e.target.value)}
                  className="py-1 px-2 border font-bold"
                  placeholder="New Image URL"
                />
                <button
                  onClick={() => handleUpdate(product.id, newProductName, newProductPrice, newProductImage)}
                  className="bg-blue-500 text-white py-1 px-2 rounded"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          className="py-1 px-2 border font-bold"
          placeholder="Product Name"
        />
        <input
          type="number"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(Number(e.target.value))}
          className="py-1 px-2 border font-bold"
          placeholder="Product Price"
        />
        <input
          type="text"
          value={newProductImage}
          onChange={(e) => setNewProductImage(e.target.value)}
          className="py-1 px-2 border font-bold"
          placeholder="Image URL"
        />
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white py-1 px-2 rounded ml-2"
        >
          Create Product
        </button>
      </div>
    </div>
  );
};

export default Products;

