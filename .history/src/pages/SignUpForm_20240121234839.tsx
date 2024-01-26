import React from 'react';

const SignUpForm: React.FC = () => {
  return (
    <div className="px-80 py-30">

    <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold pb-5">SignUp</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Andrew Jackson"
            required
            value=""
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="andrew@mail.com"
            required
            value=""
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="*********"
            required
            value=""
          />
        </div>
        <div>
          <p className="text-red-500 pb-5"></p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
            Register
          </button>
          <div className="flex items-center text-sm">
            <p>Already have an account?</p>
            <p className="underline cursor-pointer ml-1">Sign in</p>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUpForm;













// import React from 'react';

// const Signup: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <img
//           className="mx-auto h-10 w-auto"
//           src="https://www.svgrepo.com/show/301692/login.svg"
//           alt="Workflow"
//         />
//         <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
//           Create a new account
//         </h2>
//         <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
//           Or
//           <a
//             href="#"
//             className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
//           >
//             login to your account
//           </a>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form method="POST" action="#">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
//                 Name
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <input
//                   id="name"
//                   name="name"
//                   placeholder="John Doe"
//                   type="text"
                 
//                   value=""
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                 />
//                 <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">
//                 Username
//               </label>
//               <div className="mt-1 flex rounded-md shadow-sm">
//                 <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
//                   iworkedon.com/
//                 </span>
//                 <input
//                   id="username"
//                   name="username"
//                   placeholder="john"
//                   type="text"
                  
//                   value=""
//                   className="flex-1 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                 />
//               </div>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <input
//                   id="email"
//                   name="email"
//                   placeholder="user@example.com"
//                   type="email"
                 
//                   value=""
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                 />
//                 <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 rounded-md shadow-sm">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
                 
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                 />
//               </div>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
//                 Confirm Password
//               </label>
//               <div className="mt-1 rounded-md shadow-sm">
//                 <input
//                   id="password_confirmation"
//                   name="password_confirmation"
//                   type="password"
                  
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                 />
//               </div>
//             </div>

//             <div className="mt-6">
//               <span className="block w-full rounded-md shadow-sm">
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
//                 >
//                   Create account
//                 </button>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
