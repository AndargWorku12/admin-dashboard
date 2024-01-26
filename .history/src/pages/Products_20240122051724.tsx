import React, { useState } from 'react';
import '../style/products.css';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductProps {
  products: Product[];
  onCreate: (product: Product) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newName: string, newPrice: number) => void;
}

const Products: React.FC<ProductProps> = ({
  products,
  onCreate,
  onDelete,
  onUpdate,
}) => {
  const [newProductName, setNewProductName] = useState<string>('');
  const [newProductPrice, setNewProductPrice] = useState<number>(0);

  const handleCreate = () => {
    const newProduct: Product = {
      id: String(products.length + 1), // Ensure id is a string
      name: newProductName,
      price: newProductPrice,
    };
    onCreate(newProduct);
    setNewProductName('');
    setNewProductPrice(0);
  };

  const handleDelete = (id: string) => {
    onDelete(id);
  };

  const handleUpdate = (id: string, newName: string, newPrice: number) => {
    onUpdate(id, newName, newPrice);
  };

  return (
    <div className="product-container">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b border-r font-bold">Name</th>
            <th className="py-2 px-4 border-b border-r font-bold">Price</th>
            <th className="py-2 px-4 border-b font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
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
                />
                <input
                  type="number"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(Number(e.target.value))}
                  className="py-1 px-2 border font-bold"
                />
                <button
                  onClick={() =>
                    handleUpdate(product.id, newProductName, newProductPrice)
                  }
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
        />
        <input
          type="number"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(Number(e.target.value))}
          className="py-1 px-2 border font-bold"
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
