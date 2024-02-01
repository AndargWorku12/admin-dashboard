import React from 'react'

const ShopCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 mt-0">
      <p className="text-4xl">List of shops</p>

      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <svg
            className="h-6 mr-3"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 455.005 455.005"
            // style={{ enableBackground: 'new 0 0 455.005 455.005' }}
            xmlSpace="preserve"
          >
            {/* Your SVG path here */}
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* CARD 1 */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <img
                className="w-full h-60"
                src="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp"
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Add to chart
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Best T-shirt
            </a>
            <p className="text-gray-500 text-sm">
            A T-shirt is a short-sleeved casual top typically made of cotton or a cotton blend. 
            It has a simple design, featuring a round neckline and short sleeves, and it is characterized by its comfortable and versatile nature. T-shirts often display various graphics, images, or text, making them a popular form of self-expression and a canvas for personal style. 
           
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <a
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                // style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                {/* Your SVG path here */}
              </svg>
              <span className="ml-1">6 mins ago</span>
            </a>

            <a
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="ml-1">39 Comments</span>
            </a>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <img
                className="w-full h-60"
                src="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp"
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Add to chart
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Best T-shirt
            </a>
            <p className="text-gray-500 text-sm">
            A T-shirt is a short-sleeved casual top typically made of cotton or a cotton blend. 
            It has a simple design, featuring a round neckline and short sleeves, and it is characterized by its comfortable and versatile nature. T-shirts often display various graphics, images, or text, making them a popular form of self-expression and a canvas for personal style. 
           
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <a
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                // style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                {/* Your SVG path here */}
              </svg>
              <span className="ml-1">6 mins ago</span>
            </a>

            <a
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="ml-1">39 Comments</span>
            </a>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <img
                className="w-full h-60"
                src="https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp"
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Add to chart
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Best T-shirt
            </a>
            <p className="text-gray-500 text-sm">
            A T-shirt is a short-sleeved casual top typically made of cotton or a cotton blend. 
            It has a simple design, featuring a round neckline and short sleeves, and it is characterized by its comfortable and versatile nature. T-shirts often display various graphics, images, or text, making them a popular form of self-expression and a canvas for personal style. 
           
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <a
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                // style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                {/* Your SVG path here */}
              </svg>
              <span className="ml-1">6 mins ago</span>
            </a>

            <a
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="ml-1">39 Comments</span>
            </a>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default ShopCard

// import React from 'react'
// import { SimpleGrid, Card, CardBody, Divider, CardFooter, ButtonGroup, Button, Image, Text, Heading,Stack } from '@chakra-ui/react';

// const ShopCard:React.FC = () => {
//   return (
//     <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

// <Card maxW='sm' >
//   <CardBody>
//     <Image
//       src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//       alt='Green double couch with wooden legs'
//       borderRadius='lg'
//     />
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>Living room Sofa</Heading>
//       <Text fontSize="sm">
//         This sofa is perfect for modern tropical spaces, baroque inspired
//         spaces, earthy toned spaces and for people who love a chic design with a
//         sprinkle of vintage design.
//       </Text>
//       <Text color='blue.600' fontSize='sm'>
//         450 birr
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <ButtonGroup spacing='2'>
//       <Button variant='solid' colorScheme='blue'>
//         Buy now
//       </Button>
//       <Button variant='ghost' colorScheme='blue'>
//         Add to cart
//       </Button>
//     </ButtonGroup>
//   </CardFooter>
// </Card>
// <Card maxW='sm'>
//   <CardBody>
//     <Image
//       src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//       alt='Green double couch with wooden legs'
//       borderRadius='lg'
//     />
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>Living room Sofa</Heading>
//       <Text fontSize="sm">
//         This sofa is perfect for modern tropical spaces, baroque inspired
//         spaces, earthy toned spaces and for people who love a chic design with a
//         sprinkle of vintage design.
//       </Text>
//       <Text color='blue.600' fontSize='sm'>
//         450 birr
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <ButtonGroup spacing='2'>
//       <Button variant='solid' colorScheme='blue'>
//         Buy now
//       </Button>
//       <Button variant='ghost' colorScheme='blue'>
//         Add to cart
//       </Button>
//     </ButtonGroup>
//   </CardFooter>
// </Card>
// <Card maxW='sm'>
//   <CardBody>
//     <Image
//       src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//       alt='Green double couch with wooden legs'
//       borderRadius='lg'
//     />
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>Living room Sofa</Heading>
//       <Text fontSize="sm">
//         This sofa is perfect for modern tropical spaces, baroque inspired
//         spaces, earthy toned spaces and for people who love a chic design with a
//         sprinkle of vintage design.
//       </Text>
//       <Text color='blue.600' fontSize='sm'>
//         450 birr
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <ButtonGroup spacing='2'>
//       <Button variant='solid' colorScheme='blue'>
//         Buy now
//       </Button>
//       <Button variant='ghost' colorScheme='blue'>
//         Add to cart
//       </Button>
//     </ButtonGroup>
//   </CardFooter>
// </Card>

//     </SimpleGrid>

//   )
// }

// export default ShopCard
