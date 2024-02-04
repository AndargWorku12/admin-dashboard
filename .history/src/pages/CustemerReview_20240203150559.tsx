// src/components/ReviewPage.tsx

import React, { useState, ChangeEvent } from 'react';
import '../styles/review.css';

interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number; // Rating represented as a number (1 to 5)
  photo: string;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-6 h-6 fill-current text-yellow-500 ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C5.373 2 0 7.373 0 14s5.373 12 12 12 12-5.373 12-12S18.627 2 12 2zm0 22c-6.627 0-12-5.373-12-12S5.373 2 12 2s12 5.373 12 12-5.373 12-12 12zm-1-17v8h2v-8h-2zm0 10v2h2v-2h-2z" />
  </svg>
);

const ReviewPage: React.FC = () => {
  const initialReviews: Review[] = [
    { id: '1', name: 'John Doe', comment: 'Great product!', rating: 5, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
    { id: '2', name: 'Jane Smith', comment: 'Not bad, but could be better.', rating: 3, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
    { id: '3', name: 'Alice Johnson', comment: 'Excellent service!', rating: 4, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
    { id: '4', name: 'Bob Williams', comment: 'Product was damaged upon arrival.', rating: 2, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
    { id: '5', name: 'Eva Davis', comment: 'Fast shipping, good quality.', rating: 5, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
  ];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [newReview, setNewReview] = useState<Review>({
    id: '0',
    name: '',
    comment: '',
    rating: 3,
    photo: '',
  });
  const [reviewToDelete, setReviewToDelete] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);

  const handleAddReview = () => {
    setReviews([...reviews, newReview]);
    setModalOpen(false);
    setNewReview({
      id: '0',
      name: '',
      comment: '',
      rating: 3,
      photo: '',
    });
  };

  const handleEditReview = (id: string) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    if (reviewToEdit) {
      setNewReview({ ...reviewToEdit });
      setModalOpen(true);
    }
  };

  const handleDeleteReview = (id: string) => {
    setReviewToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (reviewToDelete !== null) {
      const updatedReviews = reviews.filter((review) => review.id !== reviewToDelete);
      setReviews(updatedReviews);
      setReviewToDelete(null);
      setConfirmModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setReviewToDelete(null);
    setConfirmModalOpen(false);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setNewReview({ ...newReview, photo: reader.result as string });
      };
    }

    setDragOver(false);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setNewReview({ ...newReview, photo: reader.result as string });
      };
    }
  };

  return (
    <div className="container mx-auto mt-8 block with-shadow">
      <h1 className="text-lg font-semibold mb-4">Customer Reviews</h1>

      <button
        className="add__review font-bold py-2 px-4 mb-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add Review
      </button>

      <table className="w-full">
        <thead>
          <tr className='bg-gray-300'>
            <th className="text-left">ID</th>
            <th className="text-left">Photo</th>
            <th className="text-left">Name</th>
            <th className="text-left">Comment</th>
            <th className="text-left">Rating</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>
                {review.photo && (
                  <img src={review.photo} alt={`Review by ${review.name}`} className="w-20 h-20 object-cover" />
                )}
              </td>
              <td>{review.name}</td>
              <td>{review.comment}</td>
              <td>
                {[...Array(review.rating)].map((_, index) => (
                  <StarIcon key={index} filled />
                ))}
              </td>
              <td>
                <button
                  className=" text-indigo-900 hover:underline mr-2"
                  onClick={() => handleEditReview(review.id)}
                >
                  Edit
                </button>
                <button
                  className="text-pink-500 hover:underline"
                  onClick={() => handleDeleteReview(review.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{newReview.id ? 'Edit' : 'Add'} Review</h2>
            <label className="block mb-4">
              Name:
              <input
                type="text"
                className="form-input mt-1 block w-full"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Comment:
              <textarea
                className="form-input mt-1 block w-full"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              Rating:
              <select
                className="form-select mt-1 block w-full"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              >
                <option value="1">★☆☆☆☆</option>
                <option value="2">★★☆☆☆</option>
                <option value="3">★★★☆☆</option>
                <option value="4">★★★★☆</option>
                <option value="5">★★★★★</option>
              </select>
            </label>
            <div className="mb-4">
              <label
                className={`cursor-pointer inline-block px-4 py-2 border rounded-md ${
                  dragOver ? 'border-pink-500' : 'border-gray-300'
                } ${
                  newReview.photo ? 'bg-green-100 hover:bg-green-200' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => handleFileDrop(e)}
              >
                {newReview.photo ? 'Change Photo' : 'Drag & Drop or Click to Upload Photo'}
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileInput}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={handleAddReview}
              >
                {newReview.id ? 'Save' : 'Add'}
              </button>
              <button
                className=" bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg mb-4">Are you sure you want to delete this review?</p>
            <div className="flex justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;

// // src/App.tsx
// import React, { useState, ChangeEvent } from 'react';

// import '../styles/review.css'
// interface Review {
//   id: number;
//   name: string;
//   comment: string;
//   rating: number;
//   photo: string;
// }

// const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
//   <svg
//     className={`w-6 h-6 fill-current ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 2C5.373 2 0 7.373 0 14s5.373 12 12 12 12-5.373 12-12S18.627 2 12 2zm0 22c-6.627 0-12-5.373-12-12S5.373 2 12 2s12 5.373 12 12-5.373 12-12 12zm-1-17v8h2v-8h-2zm0 10v2h2v-2h-2z" />
//   </svg>
// );

// const ReviewPage: React.FC = () => {
//   const initialReviews: Review[] = [
//     { id: 1, name: 'John Doe', comment: 'Great product!', rating: 5, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
//     { id: 2, name: 'Jane Smith', comment: 'Not bad, but could be better.', rating: 3, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
//     { id: 3, name: 'Alice Johnson', comment: 'Excellent service!', rating: 4, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
//     { id: 4, name: 'Bob Williams', comment: 'Product was damaged upon arrival.', rating: 2, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
//     { id: 5, name: 'Eva Davis', comment: 'Fast shipping, good quality.', rating: 5, photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg' },
//   ];

//   const [reviews, setReviews] = useState<Review[]>(initialReviews);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
//   const [newReview, setNewReview] = useState<Review>({
//     id: 0,
//     name: '',
//     comment: '',
//     rating: 0,
//     photo: '',
//   });
//   const [reviewToDelete, setReviewToDelete] = useState<number | null>(null);
//   const [dragOver, setDragOver] = useState<boolean>(false);

//   const handleAddReview = () => {
//     setReviews([...reviews, newReview]);
//     setModalOpen(false);
//     setNewReview({
//       id: 0,
//       name: '',
//       comment: '',
//       rating: 0,
//       photo: '',
//     });
//   };

//   const handleEditReview = (id: number) => {
//     const reviewToEdit = reviews.find((review) => review.id === id);
//     if (reviewToEdit) {
//       setNewReview({ ...reviewToEdit });
//       setModalOpen(true);
//     }
//   };

//   const handleDeleteReview = (id: number) => {
//     setReviewToDelete(id);
//     setConfirmModalOpen(true);
//   };

//   const confirmDelete = () => {
//     if (reviewToDelete !== null) {
//       const updatedReviews = reviews.filter((review) => review.id !== reviewToDelete);
//       setReviews(updatedReviews);
//       setReviewToDelete(null);
//       setConfirmModalOpen(false);
//     }
//   };

//   const cancelDelete = () => {
//     setReviewToDelete(null);
//     setConfirmModalOpen(false);
//   };

//   const handleFileDrop = (e: React.DragEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         setNewReview({ ...newReview, photo: reader.result as string });
//       };
//     }

//     setDragOver(false);
//   };

//   const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         setNewReview({ ...newReview, photo: reader.result as string });
//       };
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8 block">
//       <h1 className="text-lg font-semibold mb-4">Customer Reviews</h1>

//       <button
//         className="add__review font-bold py-2 px-4 mb-4 rounded"
//         onClick={() => setModalOpen(true)}
//       >
//         Add Review
//       </button>

//       <table className="w-full">
//         <thead>
//           <tr className='bg-gray-300'>
//             <th className="text-left">ID</th>
//             <th className="text-left">Photo</th>
//             <th className="text-left">Name</th>
//             <th className="text-left">Comment</th>
//             <th className="text-left">Rating</th>
//             <th className="text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((review) => (
//             <tr key={review.id}>
//               <td>{review.id}</td>
//               <td>
//                 {review.photo && (
//                   <img src={review.photo} alt={`Review by ${review.name}`} className="w-20 h-20 object-cover" />
//                 )}
//               </td>
//               <td>{review.name}</td>
//               <td>{review.comment}</td>
//               <td>
//                 {Array.from({ length: review.rating }, (_, index) => (
//                   <StarIcon key={index} filled />
//                 ))}
//               </td>
//               <td>
//                 <button
//                   className=" text-indigo-900 hover:underline mr-2"
//                   onClick={() => handleEditReview(review.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="text-pink-500 hover:underline"
//                   onClick={() => handleDeleteReview(review.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">{newReview.id ? 'Edit' : 'Add'} Review</h2>
//             <label className="block mb-4">
//               Name:
//               <input
//                 type="text"
//                 className="form-input mt-1 block w-full"
//                 value={newReview.name}
//                 onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//               />
//             </label>
//             <label className="block mb-4">
//               Comment:
//               <textarea
//                 className="form-input mt-1 block w-full"
//                 value={newReview.comment}
//                 onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//               />
//             </label>
//             <label className="block mb-4">
//               Rating:
//               <input
//                 type="number"
//                 min="1"
//                 max="5"
//                 className="form-input mt-1 block w-full"
//                 value={newReview.rating}
//                 onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) })}
//               />
//             </label>
//             <div className="mb-4">
//               <label
//                 className={`cursor-pointer inline-block px-4 py-2 border rounded-md ${
//                   dragOver ? 'border-pink-500' : 'border-gray-300'
//                 } ${
//                   newReview.photo ? 'bg-green-100 hover:bg-green-200' : 'bg-gray-100 hover:bg-gray-200'
//                 }`}
//                 onDragOver={(e) => {
//                   e.preventDefault();
//                   setDragOver(true);
//                 }}
//                 onDragLeave={() => setDragOver(false)}
//                 onDrop={(e) => handleFileDrop(e)}
//               >
//                 {newReview.photo ? 'Change Photo' : 'Drag & Drop or Click to Upload Photo'}
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleFileInput}
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
//                 onClick={handleAddReview}
//               >
//                 {newReview.id ? 'Save' : 'Add'}
//               </button>
//               <button
//                 className=" bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => setModalOpen(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {confirmModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg">
//             <p className="text-lg mb-4">Are you sure you want to delete this review?</p>
//             <div className="flex justify-end">
//               <button
//                 className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded"
//                 onClick={confirmDelete}
//               >
//                 Yes
//               </button>
//               <button
//                 className="bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
//                 onClick={cancelDelete}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewPage;



// // import React from 'react';

// // interface ReviewProps {
// //   username: string;
// //   joinedDate: string;
// //   reviewDate: string;
// //   reviewText: string;
// // }

// // const CustomerReview: React.FC<ReviewProps> = ({ username, joinedDate, reviewDate, reviewText }) => {
// //   return (
// //     <div>
// //       <p className="text-2xl">Customer reviews </p>
// //     <article className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
// //       <div className="flex items-center mb-4">
// //         <img className="w-10 h-10 me-4 rounded-full" 
// //         src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
// //         <div className="font-medium dark:text-white">
// //           <p>
// //             {username} <time dateTime={joinedDate} className="block text-sm text-gray-500 dark:text-gray-400">
// //               Joined on {joinedDate}
// //             </time>
// //           </p>
// //         </div>
// //       </div>
// //       <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
// //         {[1, 2, 3, 4, 5].map((_, index) => (
// //           <svg
// //             key={index}
// //             className="w-4 h-4 text-yellow-300"
// //             aria-hidden="true"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="currentColor"
// //             viewBox="0 0 22 20"
// //           >
// //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //           </svg>
// //         ))}
// //         <svg
// //           className="w-4 h-4 text-gray-300 dark:text-gray-500"
// //           aria-hidden="true"
// //           xmlns="http://www.w3.org/2000/svg"
// //           fill="currentColor"
// //           viewBox="0 0 22 20"
// //         >
// //           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //         </svg>
// //         <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
// //       </div>
// //       <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
// //         <p>Reviewed in the United Kingdom on <time dateTime={reviewDate}>{reviewDate}</time></p>
// //       </footer>
// //       <p className="mb-2 text-gray-500 dark:text-gray-400">{reviewText}</p>
// //       <p className="mb-3 text-gray-500 dark:text-gray-400">
// //         It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën
// //         to a Ferrari. This watch was well under £100! An absolute bargain.
// //       </p>
// //       <a href="#" className="block mb-5 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600">
// //         Read more
// //       </a>
// //       <aside>
// //         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
// //         <div className="flex items-center mt-3">
// //           <button className="bg-gray-700 text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
// //             Helpful
// //           </button>
// //           <button className="ps-4 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">
// //             Report abuse
// //           </button>
// //         </div>
// //       </aside>
// //     </article>
// //     <article className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
// //       <div className="flex items-center mb-4">
// //         <img className="w-10 h-10 me-4 rounded-full" 
// //         src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
// //         <div className="font-medium dark:text-white">
// //           <p>
// //             {username} <time dateTime={joinedDate} className="block text-sm text-gray-500 dark:text-gray-400">
// //               Joined on {joinedDate}
// //             </time>
// //           </p>
// //         </div>
// //       </div>
// //       <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
// //         {[1, 2, 3, 4, 5].map((_, index) => (
// //           <svg
// //             key={index}
// //             className="w-4 h-4 text-yellow-300"
// //             aria-hidden="true"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="currentColor"
// //             viewBox="0 0 22 20"
// //           >
// //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //           </svg>
// //         ))}
// //         <svg
// //           className="w-4 h-4 text-gray-300 dark:text-gray-500"
// //           aria-hidden="true"
// //           xmlns="http://www.w3.org/2000/svg"
// //           fill="currentColor"
// //           viewBox="0 0 22 20"
// //         >
// //           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //         </svg>
// //         <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
// //       </div>
// //       <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
// //         <p>Reviewed in the United Kingdom on <time dateTime={reviewDate}>{reviewDate}</time></p>
// //       </footer>
// //       <p className="mb-2 text-gray-500 dark:text-gray-400">{reviewText}</p>
// //       <p className="mb-3 text-gray-500 dark:text-gray-400">
// //         It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën
// //         to a Ferrari. This watch was well under £100! An absolute bargain.
// //       </p>
// //       <a href="#" className="block mb-5 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600">
// //         Read more
// //       </a>
// //       <aside>
// //         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
// //         <div className="flex items-center mt-3">
// //           <button className="bg-gray-700 text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
// //             Helpful
// //           </button>
// //           <button className="ps-4 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">
// //             Report abuse
// //           </button>
// //         </div>
// //       </aside>
// //     </article>
   
// //     </div>
// //   );
// // };

// // export default CustomerReview;


