import React, { useState } from 'react';
import '../style/category.css';

interface CategoryType {
  id: string;
  name: string;
}

interface CategoryProps {
  categories: CategoryType[];
  onCreate: (category: CategoryType) => void;
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
    const newCategory: CategoryType = {
      id: String(categories.length + 1),
      name: newCategoryName,
    };
    onCreate(newCategory);
    setNewCategoryName('');
  };

  const handleDelete = (id: string) => {
    onDelete(id);
  };

  const handleUpdate = (id: string, newName: string) => {
    onUpdate(id, newName);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border">
              <td className="py-2 px-4 border">{category.name}</td>
              <td className="py-2 px-4 border flex items-center space-x-2">
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="py-1 px-2 border"
                />
                <button
                  onClick={() => handleUpdate(category.id, newCategoryName)}
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
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          className="py-1 px-2 border"
        />
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white py-1 px-2 rounded ml-2"
        >
          Create Category
        </button>
      </div>
    </div>
  );
};

export default Category;












// import React, { useState } from 'react';
// import '../style/category.css';
// interface CategoryInterface {
//   id: string;
//   name: string;
// }

// interface CategoryProps {
//   categories: CategoryInterface[];
//   onCreate: (category: Category) => void;
//   onDelete: (id: string) => void;
//   onUpdate: (id: string, newName: string) => void;
// }

// const Category: React.FC<CategoryProps> = ({
//   categories,
//   onCreate,
//   onDelete,
//   onUpdate,
// }) => {
//   const [newCategoryName, setNewCategoryName] = useState<string>('');

//   const handleCreate = () => {
//     const newCategory: Category = {
//       id: categories.length + 1, // This is a simple way to generate unique IDs. You might want to use a more robust solution in a real application.
//       name: newCategoryName,
//     };
//     onCreate(newCategory);
//     setNewCategoryName('');
//   };

//   const handleDelete = (id: number) => {
//     onDelete(id);
//   };

//   const handleUpdate = (id: number, newName: string) => {
//     onUpdate(id, newName);
//   };

//   return (
//     <div>
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>
//             {category.name}{' '}
//             <button onClick={() => handleDelete(category.id)}>Delete</button>{' '}
//             <input
//               type="text"
//               value={newCategoryName}
//               onChange={(e) => setNewCategoryName(e.target.value)}
//             />
//             <button onClick={() => handleUpdate(category.id, newCategoryName)}>Update</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={newCategoryName}
//           onChange={(e) => setNewCategoryName(e.target.value)}
//         />
//         <button onClick={handleCreate}>Create Category</button>
//       </div>
//     </div>
//   );
// };

// export default Category;
