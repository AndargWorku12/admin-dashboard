
import React, { useState } from 'react';
// Product.ts
interface Product {
  id: string;
  photo: string;
  name: string;
  price: number;
  category: string;
}

// ProductList.tsx


interface ProductListProps {
  products: Product[];
  onCreate: (newProduct: Omit<Product, 'id'> & { id?: string }) => void; // Include 'id' as optional
  onDelete: (productId: string) => void;
  onUpdate: (productId: string, newName: string, newPrice: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onCreate, onDelete, onUpdate }) => {
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'> & { id?: string }>({
    photo: '',
    name: '',
    price: 0,
    category: '',
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleCreateProduct = () => {
    onCreate({ ...newProduct, id: Date.now().toString() });
    setNewProduct({
      photo: '',
      name: '',
      price: 0,
      category: '',
    });
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      onUpdate(editingProduct.id, editingProduct.name, editingProduct.price);
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (id: string) => {
    onDelete(id);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
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
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              <button onClick={() => handleEditProduct(product)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>{editingProduct ? 'Edit Product' : 'Create New Product'}</h2>
    <div>
      <label htmlFor="productPhoto">Photo URL:</label>
      <input
        type="text"
        id="productPhoto"
        value={editingProduct ? editingProduct.photo : newProduct.photo}
        onChange={(e) =>
          editingProduct
            ? setEditingProduct({ ...editingProduct, photo: e.target.value })
            : setNewProduct({ ...newProduct, photo: e.target.value })
        }
      />
    </div>
    <div>
      <label htmlFor="productName">Name:</label>
      <input
        type="text"
        id="productName"
        value={editingProduct ? editingProduct.name : newProduct.name}
        onChange={(e) =>
          editingProduct
            ? setEditingProduct({ ...editingProduct, name: e.target.value })
            : setNewProduct({ ...newProduct, name: e.target.value })
        }
      />
    </div>
    <div>
      <label htmlFor="productPrice">Price:</label>
      <input
        type="number"
        id="productPrice"
        value={editingProduct ? editingProduct.price : newProduct.price}
        onChange={(e) =>
          editingProduct
            ? setEditingProduct({ ...editingProduct, price: +e.target.value })
            : setNewProduct({ ...newProduct, price: +e.target.value })
        }
      />
    </div>
    <div>
      <label htmlFor="productCategory">Category:</label>
      <input
        type="text"
        id="productCategory"
        value={editingProduct ? editingProduct.category : newProduct.category}
        onChange={(e) =>
          editingProduct
            ? setEditingProduct({ ...editingProduct, category: e.target.value })
            : setNewProduct({ ...newProduct, category: e.target.value })
        }
      />
    </div>
    <button onClick={editingProduct ? handleUpdateProduct : handleCreateProduct}>
      {editingProduct ? 'Update Product' : 'Create Product'}
    </button>
  </div>

  );
};

export default ProductList;
