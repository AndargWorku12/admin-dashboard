// Product.ts
interface Product {
  id: number;
  photo: string;
  name: string;
  price: number;
  category: string;
}

// ProductList.tsx
import React, { useState } from 'react';

interface ProductListProps {
  products: Product[];
  onProductCreate: (newProduct: Product) => void;
  onProductDelete: (id: number) => void;
  onProductUpdate: (updatedProduct: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductCreate,
  onProductDelete,
  onProductUpdate,
}) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    photo: '',
    name: '',
    price: 0,
    category: '',
  });

  const handleCreateProduct = () => {
    onProductCreate(newProduct);
    setNewProduct({
      id: 0,
      photo: '',
      name: '',
      price: 0,
      category: '',
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.photo} alt={product.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => onProductDelete(product.id)}>Delete</button>
                <button onClick={() => onProductUpdate(product)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Create New Product</h2>
      <div>
        <label htmlFor="productPhoto">Photo URL:</label>
        <input
          type="text"
          id="productPhoto"
          value={newProduct.photo}
          onChange={(e) => setNewProduct({ ...newProduct, photo: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="productName">Name:</label>
        <input
          type="text"
          id="productName"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="productPrice">Price:</label>
        <input
          type="number"
          id="productPrice"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: +e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="productCategory">Category:</label>
        <input
          type="text"
          id="productCategory"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
      </div>
      <button onClick={handleCreateProduct}>Create Product</button>
    </div>
  );
};

export default ProductList;
