import React, { useState } from 'react';

interface Product {
  id: string;
  photo: string;
  name: string;
  price: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
  onCreate: (newProduct: Omit<Product, 'id'> & { id?: string }) => void;
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
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg block gap-64 text-center ml-20">
      <h2 className="text-3xl font-bold mb-4 text-left">Product List</h2>
      <table className="w-full border border-cyan-700 w-max-80 shadow-2xl">
        <thead>
          <tr className=' bg-gray-800 text-white'>
            <th className="py-2">Photo</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Category</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td>
                <img src={product.photo} alt={product.name} className="w-28 h-26 object-cover" />
              </td>
              <td className="py-2">{product.name}</td>
              <td className="py-2">${product.price.toFixed(2)}</td>
              <td className="py-2">{product.category}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditProduct(product)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-6 mb-4">
        {editingProduct ? 'Edit Product' : 'Create New Product'}
      </h2>
      <div className="grid grid-cols-2 gap-4 text-start">
        <div>
          <label htmlFor="productPhoto" className="block text-sm font-medium text-gray-700">
            Photo URL:
          </label>
          <input
            type="text"
            id="productPhoto"
            placeholder='enter photo url'
            value={editingProduct ? editingProduct.photo : newProduct.photo}
            onChange={(e) =>
              editingProduct
                ? setEditingProduct({ ...editingProduct, photo: e.target.value })
                : setNewProduct({ ...newProduct, photo: e.target.value })
            }
            className="mt-1 p-2 border-4 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="productName"
            placeholder='enter name'
            value={editingProduct ? editingProduct.name : newProduct.name}
            onChange={(e) =>
              editingProduct
                ? setEditingProduct({ ...editingProduct, name: e.target.value })
                : setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="mt-1 p-2 border-4 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="number"
            id="productPrice"
            placeholder='enter price'
            value={editingProduct ? editingProduct.price : newProduct.price}
            onChange={(e) =>
              editingProduct
                ? setEditingProduct({ ...editingProduct, price: +e.target.value })
                : setNewProduct({ ...newProduct, price: +e.target.value })
            }
            className="mt-1 p-2 border-4 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <input
            type="text"
            id="productCategory"
            placeholder='choose category'
            value={editingProduct ? editingProduct.category : newProduct.category}
            onChange={(e) =>
              editingProduct
                ? setEditingProduct({ ...editingProduct, category: e.target.value })
                : setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="mt-1 p-2 border-4  rounded w-full"
          />
        </div>
      </div>
      <button
        onClick={editingProduct ? handleUpdateProduct : handleCreateProduct}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingProduct ? 'Update Product' : 'Create Product'}
      </button>
    </div>
  );
};

export default ProductList;
