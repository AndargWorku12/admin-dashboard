import React, { useState } from 'react';
import '../style/category.css';
interface CategoryInterface {
  id: string;
  name: string;
}

interface CategoryProps {
  categories: CategoryInterface[];
  onCreate: (category: Category) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newName: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  categories,
  onCreate,
  onDelete,
  onUpdate,
}) => {
  const [newCategoryName, setNewCategoryName] = useState<string>('');

  const handleCreate = () => {
    const newCategory: Category = {
      id: categories.length + 1, // This is a simple way to generate unique IDs. You might want to use a more robust solution in a real application.
      name: newCategoryName,
    };
    onCreate(newCategory);
    setNewCategoryName('');
  };

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  const handleUpdate = (id: number, newName: string) => {
    onUpdate(id, newName);
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}{' '}
            <button onClick={() => handleDelete(category.id)}>Delete</button>{' '}
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <button onClick={() => handleUpdate(category.id, newCategoryName)}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button onClick={handleCreate}>Create Category</button>
      </div>
    </div>
  );
};

export default Category;
