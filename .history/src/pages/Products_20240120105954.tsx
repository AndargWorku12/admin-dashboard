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
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} {product.price}
            <button onClick={() => handleDelete(product.id)}>Delete</button>{' '}
            <input
              type="text"
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
            />
            <input
              type="number"
              value={newProductPrice}
              onChange={(e) => setNewProductPrice(Number(e.target.value))}
            />
            <button
              onClick={() =>
                handleUpdate(product.id, newProductName, newProductPrice)
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <div className="product-create">
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="number"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(Number(e.target.value))}
        />
        <button onClick={handleCreate}>Create Product</button>
      </div>
    </div>
  );
};

export default Products;
