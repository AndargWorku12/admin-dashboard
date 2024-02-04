// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

interface ReviewProps {
  name: string;
  comment: string;
  rating: number;
}

const Review: React.FC<ReviewProps> = ({ name, comment, rating }) => {
  return (
    <div className="mb-8 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold mr-2">{name}</span>
        <div className="flex">
          {Array.from({ length: rating }, (_, index) => (
            <svg
              key={index}
              className="w-6 h-6 fill-current text-yellow-500 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C5.373 2 0 7.373 0 14s5.373 12 12 12 12-5.373 12-12S18.627 2 12 2zm0 22c-6.627 0-12-5.373-12-12S5.373 2 12 2s12 5.373 12 12-5.373 12-12 12zm-1-17v8h2v-8h-2zm0 10v2h2v-2h-2z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};


const ReviewPage: React.FC = () => {
  const reviews = [
    {
      name: 'John Doe',
      comment: 'Great product! Loved the quality and fast shipping.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      comment: 'The item arrived damaged. Disappointed with the condition.',
      rating: 2,
    },
    // Add more reviews as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};
export default ReviewPage;




// import React from 'react';

// interface ReviewProps {
//   username: string;
//   joinedDate: string;
//   reviewDate: string;
//   reviewText: string;
// }

// const CustomerReview: React.FC<ReviewProps> = ({ username, joinedDate, reviewDate, reviewText }) => {
//   return (
//     <div>
//       <p className="text-2xl">Customer reviews </p>
//     <article className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
//       <div className="flex items-center mb-4">
//         <img className="w-10 h-10 me-4 rounded-full" 
//         src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <div className="font-medium dark:text-white">
//           <p>
//             {username} <time dateTime={joinedDate} className="block text-sm text-gray-500 dark:text-gray-400">
//               Joined on {joinedDate}
//             </time>
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
//         {[1, 2, 3, 4, 5].map((_, index) => (
//           <svg
//             key={index}
//             className="w-4 h-4 text-yellow-300"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 22 20"
//           >
//             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//           </svg>
//         ))}
//         <svg
//           className="w-4 h-4 text-gray-300 dark:text-gray-500"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//         <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
//       </div>
//       <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
//         <p>Reviewed in the United Kingdom on <time dateTime={reviewDate}>{reviewDate}</time></p>
//       </footer>
//       <p className="mb-2 text-gray-500 dark:text-gray-400">{reviewText}</p>
//       <p className="mb-3 text-gray-500 dark:text-gray-400">
//         It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën
//         to a Ferrari. This watch was well under £100! An absolute bargain.
//       </p>
//       <a href="#" className="block mb-5 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600">
//         Read more
//       </a>
//       <aside>
//         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
//         <div className="flex items-center mt-3">
//           <button className="bg-gray-700 text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
//             Helpful
//           </button>
//           <button className="ps-4 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">
//             Report abuse
//           </button>
//         </div>
//       </aside>
//     </article>
//     <article className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
//       <div className="flex items-center mb-4">
//         <img className="w-10 h-10 me-4 rounded-full" 
//         src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <div className="font-medium dark:text-white">
//           <p>
//             {username} <time dateTime={joinedDate} className="block text-sm text-gray-500 dark:text-gray-400">
//               Joined on {joinedDate}
//             </time>
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
//         {[1, 2, 3, 4, 5].map((_, index) => (
//           <svg
//             key={index}
//             className="w-4 h-4 text-yellow-300"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 22 20"
//           >
//             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//           </svg>
//         ))}
//         <svg
//           className="w-4 h-4 text-gray-300 dark:text-gray-500"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//         <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
//       </div>
//       <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
//         <p>Reviewed in the United Kingdom on <time dateTime={reviewDate}>{reviewDate}</time></p>
//       </footer>
//       <p className="mb-2 text-gray-500 dark:text-gray-400">{reviewText}</p>
//       <p className="mb-3 text-gray-500 dark:text-gray-400">
//         It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën
//         to a Ferrari. This watch was well under £100! An absolute bargain.
//       </p>
//       <a href="#" className="block mb-5 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600">
//         Read more
//       </a>
//       <aside>
//         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
//         <div className="flex items-center mt-3">
//           <button className="bg-gray-700 text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
//             Helpful
//           </button>
//           <button className="ps-4 text-sm font-medium text-pink-500 hover:underline dark:text-pink-600 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">
//             Report abuse
//           </button>
//         </div>
//       </aside>
//     </article>
   
//     </div>
//   );
// };

// export default CustomerReview;


