import React from 'react';

const ShopCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <p className="text-4xl">List of shops</p>

      <div className="border-b mb-5 flex justify-between text-sm">
        {/* SVG Section */}
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <svg className="h-6 mr-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 455.005 455.005" style={{ enableBackground: 'new 0 0 455.005 455.005' }} xmlSpace="preserve">
            {/* Your SVG path here */}
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          {/* Image Section */}
          <div className="relative">
            <a href="#">
              <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            {/* Category Section */}
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Cooking
              </div>
            </a>
          </div>
          {/* Description Section */}
          <div className="px-6 py-4 mb-auto">
            <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              Simplest Salad Recipe ever
            </a>
            <p className="text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Metadata Section */}
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              {/* Time Icon and Text */}
            </span>
            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              {/* Comment Icon and Text */}
            </span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          {/* Image Section */}
          <div className="relative">
            <a href="#">
              <img className="w-full" src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            {/* Category Section */}
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Cooking
              </div>
            </a>
          </div>
          {/* Description Section */}
          <div className="px-6 py-4 mb-auto">
            <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              Best FastFood Ideas (Yummy)
            </a>
            <p className="text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Metadata Section */}
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              {/* Time Icon and Text */}
            </span>
            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              {/* Comment Icon and Text */}
            </span>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          {/* Image Section */}
          <div className="relative">
            <a href="#">
              <img className="w-full" src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            {/* Category Section */}
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Cooking
              </div>
            </a>
          </div>
          {/* Description Section */}
          <div className="px-6 py-4 mb-auto">
            <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              Best FastFood Ideas (Yummy)
            </a>
            <p className="text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Metadata Section */}
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              {/* Time Icon and Text */}
            </span>
            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              {/* Comment Icon and Text */}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ShopCard;
