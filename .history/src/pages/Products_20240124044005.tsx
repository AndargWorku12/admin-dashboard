import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/products.css';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductsProps {
  // Assuming an API endpoint for fetching products
  fetchProducts: () => Promise<Product[]>;
  createProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  updateProduct: (id: string, newName: string, newPrice: number, newImage: string) => Promise<void>;
}

const Products: React.FC<ProductsProps> = ({ fetchProducts, createProduct, deleteProduct, updateProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState<string>('');
  const [newProductPrice, setNewProductPrice] = useState<number>(0);
  const [newProductImage, setNewProductImage] = useState<string>('');

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts().then((data) => setProducts(data));
  }, [fetchProducts]);

  const handleCreate = async () => {
    // Create a new product and update the state
    await createProduct({
      id: '',
      name: newProductName,
      price: newProductPrice,
      image: newProductImage,
    });

    // Fetch the updated list of products
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);

    // Clear input fields
    clearInputFields();
  };

  const handleDelete = async (id: string) => {
    // Delete the product and update the state
    await deleteProduct(id);

    // Fetch the updated list of products
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);
  };

  const handleUpdate = async (id: string, newName: string, newPrice: number, newImage: string) => {
    // Update the product and update the state
    await updateProduct(id, newName, newPrice, newImage);

    // Fetch the updated list of products
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);

    // Clear input fields
    clearInputFields();
  };

  const clearInputFields = () => {
    setNewProductName('');
    setNewProductPrice(0);
    setNewProductImage('');
  };

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
