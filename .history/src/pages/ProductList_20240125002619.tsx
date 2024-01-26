
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
      {/* The rest of your component remains the same */}
    </div>
  );
};

export default ProductList;
