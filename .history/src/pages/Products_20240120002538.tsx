import React, { useState } from 'react';
 import '../style/products.css'

interface Product {
  id: string;
  name: string;
}

interface ProductProps {
  products: Product[];
  onCreate: (product: Product) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newName: string) => void;
}

const Products: React.FC<ProductProps> = ({
  products,
  onCreate,
  onDelete,
  onUpdate,
}) => {
  const [newProductName, setNewProductName] = useState<string>('');

  const handleCreate = () => {
    const newProduct: Product = {
      id: products.length + 1,
      name: newProductName,
    };
    onCreate(newProduct);
    setNewProductName('');
  };

  const handleDelete = (id:string) => {
    onDelete(id);
  };

  const handleUpdate = (id: string, newName: string) => {
    onUpdate(id, newName);
  };

  return (
    <div className="product-container">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name}{' '}
            <button onClick={() => handleDelete(product.id)}>Delete</button>{' '}
            <input
              type="text"
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
            />
            <button onClick={() => handleUpdate(product.id, newProductName)}>
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
        <button onClick={handleCreate}>Create Product</button>
      </div>
    </div>
  );
};

export default Products;
