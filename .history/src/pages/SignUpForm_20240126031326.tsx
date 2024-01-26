
import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="Logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      {/* SVG path for Google icon */}
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>

                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      {/* SVG path for GitHub icon */}
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with GitHub</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          >
            {/* Placeholder Background Image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React from 'react';

// const SignUpForm: React.FC = () => {
//   return (
//     <div className="px-80 pt-40">

//     <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
//       <h2 className="text-2xl font-bold pb-5">SignUp</h2>
//       <form>
//         <div className="mb-4">
//           <label htmlFor="name" className="block mb-2 text-sm font-medium">
//             Your name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//             placeholder="Andrew Jackson"
//             required
//             value=""
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium">
//             Your email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//             placeholder="andrew@mail.com"
//             required
//             value=""
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2 text-sm font-medium">
//             Your password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//             placeholder="*********"
//             required
//             value=""
//           />
//         </div>
//         <div>
//           <p className="text-red-500 pb-5"></p>
//         </div>
//         <div className="flex items-center justify-between mb-4">
//           <button
//             type="submit"
//             className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
//           >
//             Register
//           </button>
//           <div className="flex items-center text-sm">
//             <p>Already have an account?</p>
//             <p className="underline cursor-pointer ml-1">Sign in</p>
//           </div>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default SignUpForm;













// // import React from 'react';

// // const Signup: React.FC = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
// //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// //         <img
// //           className="mx-auto h-10 w-auto"
// //           src="https://www.svgrepo.com/show/301692/login.svg"
// //           alt="Workflow"
// //         />
// //         <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
// //           Create a new account
// //         </h2>
// //         <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
// //           Or
// //           <a
// //             href="#"
// //             className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
// //           >
// //             login to your account
// //           </a>
// //         </p>
// //       </div>

// //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// //         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
// //           <form method="POST" action="#">
// //             <div>
// //               <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
// //                 Name
// //               </label>
// //               <div className="mt-1 relative rounded-md shadow-sm">
// //                 <input
// //                   id="name"
// //                   name="name"
// //                   placeholder="John Doe"
// //                   type="text"
                 
// //                   value=""
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
// //                 />
// //                 <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
// //                   <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
// //                       clipRule="evenodd"
// //                     ></path>
// //                   </svg>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="mt-6">
// //               <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">
// //                 Username
// //               </label>
// //               <div className="mt-1 flex rounded-md shadow-sm">
// //                 <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
// //                   iworkedon.com/
// //                 </span>
// //                 <input
// //                   id="username"
// //                   name="username"
// //                   placeholder="john"
// //                   type="text"
                  
// //                   value=""
// //                   className="flex-1 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
// //                 />
// //               </div>
// //             </div>

// //             <div className="mt-6">
// //               <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
// //                 Email address
// //               </label>
// //               <div className="mt-1 relative rounded-md shadow-sm">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   placeholder="user@example.com"
// //                   type="email"
                 
// //                   value=""
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
// //                 />
// //                 <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
// //                   <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
// //                       clipRule="evenodd"
// //                     ></path>
// //                   </svg>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="mt-6">
// //               <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
// //                 Password
// //               </label>
// //               <div className="mt-1 rounded-md shadow-sm">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type="password"
                 
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
// //                 />
// //               </div>
// //             </div>

// //             <div className="mt-6">
// //               <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
// //                 Confirm Password
// //               </label>
// //               <div className="mt-1 rounded-md shadow-sm">
// //                 <input
// //                   id="password_confirmation"
// //                   name="password_confirmation"
// //                   type="password"
                  
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
// //                 />
// //               </div>
// //             </div>

// //             <div className="mt-6">
// //               <span className="block w-full rounded-md shadow-sm">
// //                 <button
// //                   type="submit"
// //                   className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
// //                 >
// //                   Create account
// //                 </button>
// //               </span>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;
