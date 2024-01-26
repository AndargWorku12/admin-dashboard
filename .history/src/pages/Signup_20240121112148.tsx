<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or
            <a href="#"
                class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                login to your account
            </a>
        </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#">
                <div>
                    <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="John Doe" type="text" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="username" class="block text-sm font-medium leading-5 text-gray-700">Username</label>
                    <div class="mt-1 flex rounded-md shadow-sm">

                        <span class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    iworkedon.com/
                </span>
                        <input id="username" name="username" placeholder="john" type="text" required="" value="" class="flex-1 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 ">
                    </div>
                </div>

                <div class="mt-6">
                    <label for="email" class="block text-sm font-medium leading-5  text-gray-700">
            Email address
          </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" placeholder="user@example.com" type="email" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                ">
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                Password
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>

                <div class="mt-6">
                    <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">
                Confirm Password
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="password_confirmation" name="password_confirmation" type="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Create account
            </button>
          </span>
                </div>
            </form>

        </div>
    </div>
</div>












// import {
//   Box,
//   Stack,
//   Container,
//   Text,
//   Heading,
//   Avatar,
//   Button,
//   Link,
//   Divider,
//   Input,
//   Flex,
//   VisuallyHidden,
//   Icon,
// } from '@chakra-ui/react'
// import { SettingsIcon } from '@chakra-ui/icons'

// //   interface ExtendedSettingsIconProps extends SettingsIconProps {
// //     size: string;
// // }

// const Signup = () => {
//   return (
//     <Box
//       paddingTop="12"
//       paddingBottom="12"
//       maxWidth="7xl"
//       mx="auto"
//       bgColor="rgb(230,230,230)"
//       textColor="#fff"
//       className="showcase-qkda03"

//     >
//       <Flex className="showcase-1idc0c1" direction="row" gap="12">
//         <Box className="showcase-13pmxen" display="flex" flex="1 1 0%">
//           <Container
//             className="showcas-49waov"
//             paddingTop="8"
//             paddingBottom="8"
//             paddingLeft="10"
//             paddingRight="10"
//             background="bg.surface"
//             boxShadow="md"
//             borderRadius="xl"
//             bgColor="rgb(100,100,100)"
           
//           >
//             <Flex className="showcase-18936vg" direction="column" gap="8">
//               <Flex align="center" direction="column" gap="6">
//                 <svg
//                   viewBox="0 0 89 89"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="showcase-1yep4c0"
//                   color="accent"
//                   height="12"
//                   width="auto"
//                 >
//                   {/* Add your SVG path data here */}
//                 </svg>
//                 <Flex
//                   className="showcase-67omth"
//                   direction="column"
//                   gap="3"
//                   textAlign="center"
//                 >
//                   <Text
//                     fontFamily="heading"
//                     fontWeight="semibold"
//                     fontSize="2xl"
//                     lineHeight="2rem"
//                   >
//                     Create an account
//                   </Text>
//                   <Text color="fg.muted">
//                     Already have an account?{' '}
//                     <Link
//                       transition="common"
//                       transitionDuration="fast"
//                       transitionTimingFunction="ease-out"
//                       cursor="pointer"
//                       textDecoration="none"
//                       outline="2px solid transparent"
//                       outlineOffset="2px"
//                       color="brand.600"
//                       position="relative"
//                       href="#"
//                     >
//                       Log in
//                     </Link>
//                   </Text>
//                 </Flex>
//               </Flex>
//               <Flex className="showcase-ahthbn" direction="column" gap="6">
//                 {/* Form Controls and Input Fields */}
//                 <Box
//                   className="showcase-1kxonj9"
//                   role="group"
//                   width="100%"
//                   position="relative"
//                 >
//                   {/* Replace with Chakra UI Form Components */}

//                   <Text
//                     display="block"
//                     textAlign="start"
//                     fontSize="sm"
//                     marginEnd="3"
//                     marginBottom="1.5"
//                     fontWeight="medium"
//                     transition="common"
//                     transitionDuration="normal"
//                     opacity="1"
//                     color="fg.emphasized"
//                   >
//                     Email
//                     <span style={{ marginLeft: '1', color: 'red.500' }}>*</span>
//                   </Text>
//                   <Input
//                     type="text"
//                     id="name"
//                     required
//                     width="100%"
//                     minWidth="0"
//                     outline="2px solid transparent"
//                     outlineOffset="2px"
//                     position="relative"
//                     appearance="none"
//                     transition="common"
//                     fontSize="md"
//                     paddingLeft="3"
//                     paddingRight="3"
//                     height="10"
//                     borderRadius="lg"
//                     borderWidth="1px"
//                     borderStyle="solid"
//                     borderColor="border.emphasized"
//                     background="input-bg"
//                   />

//                   <Text
//                     display="block"
//                     textAlign="start"
//                     fontSize="sm"
//                     marginEnd="3"
//                     marginBottom="1.5"
//                     fontWeight="medium"
//                     transition="common"
//                     transitionDuration="normal"
//                     opacity="1"
//                     color="fg.emphasized"
//                   >
//                     Email
//                     <span style={{ marginLeft: '1', color: 'red.500' }}>*</span>
//                   </Text>
//                   <Input
//                     type="email"
//                     id="email"
//                     required
//                     width="100%"
//                     minWidth="0"
//                     outline="2px solid transparent"
//                     outlineOffset="2px"
//                     position="relative"
//                     appearance="none"
//                     transition="common"
//                     fontSize="md"
//                     paddingLeft="3"
//                     paddingRight="3"
//                     height="10"
//                     borderRadius="lg"
//                     borderWidth="1px"
//                     borderStyle="solid"
//                     borderColor="border.emphasized"
//                     background="input-bg"
//                   />
//                   <Text
//                     display="block"
//                     textAlign="start"
//                     fontSize="sm"
//                     marginEnd="3"
//                     marginBottom="1.5"
//                     fontWeight="medium"
//                     transition="common"
//                     transitionDuration="normal"
//                     opacity="1"
//                     color="fg.emphasized"
//                   >
//                     Password
//                     <span style={{ marginLeft: '1', color: 'red.500' }}>*</span>
//                   </Text>
//                   <Input
//                     type="password"
//                     id="password"
//                     required
//                     width="100%"
//                     minWidth="0"
//                     outline="2px solid transparent"
//                     outlineOffset="2px"
//                     position="relative"
//                     appearance="none"
//                     transition="common"
//                     fontSize="md"
//                     paddingLeft="3"
//                     paddingRight="3"
//                     height="10"
//                     borderRadius="lg"
//                     borderWidth="1px"
//                     borderStyle="solid"
//                     borderColor="border.emphasized"
//                     background="input-bg"
//                   />
//                 </Box>
//                 {/* Repeat the above for email and password fields */}
//                 <Button
//                   type="button"
//                   display="inline-flex"
//                   alignItems="center"
//                   justifyContent="center"
//                   userSelect="none"
//                   position="relative"
//                   whiteSpace="nowrap"
//                   verticalAlign="middle"
//                   outline="2px solid transparent"
//                   outlineOffset="2px"
//                   lineHeight="1.25rem"
//                   borderRadius="lg"
//                   fontWeight="semibold"
//                   transition="common"
//                   height="10"
//                   minWidth="10"
//                   fontSize="sm"
//                   paddingLeft="4"
//                   paddingRight="4"
//                   flexShrink="0"
//                   background="button-bg"
//                   color="button-color"
//                 >
//                   Create Account
//                 </Button>
//                 <Flex
//                   display="flex"
//                   alignItems="center"
//                   flexDirection="row"
//                   gap="0.5rem"
//                 >
//                   <Divider
//                     orientation="horizontal"
//                     opacity="1"
//                     borderWidth="0px 0px 1px"
//                     borderColor="inherit"
//                     borderStyle="solid"
//                     width="100%"
//                   />
//                   <Text
//                     fontSize="sm"
//                     lineHeight="1.25rem"
//                     whiteSpace="nowrap"
//                     color="fg.muted"
//                   >
//                     or sign up with
//                   </Text>
//                   <Divider
//                     orientation="horizontal"
//                     opacity="1"
//                     borderWidth="0px 0px 1px"
//                     borderColor="inherit"
//                     borderStyle="solid"
//                     width="100%"
//                   />
//                 </Flex>
//                 {/* Social Login Buttons */}
//                 <Flex
//                   display="inline-flex"
//                   justifyContent="stretch"
//                   data-orientation="horizontal"
//                 >
//                   {/* Replace with Chakra UI Button Components */}
//                   <Button
//                     type="button"
//                     display="inline-flex"
//                     alignItems="center"
//                     justifyContent="center"
//                     userSelect="none"
//                     position="relative"
//                     whiteSpace="nowrap"
//                     verticalAlign="middle"
//                     outline="2px solid transparent"
//                     outlineOffset="2px"
//                     lineHeight="1.25rem"
//                     borderRadius="lg"
//                     fontWeight="semibold"
//                     transition="common"
//                     height="10"
//                     minWidth="10"
//                     fontSize="sm"
//                     paddingLeft="4"
//                     paddingRight="4"
//                     borderWidth="1px"
//                     borderColor="border.emphasized"
//                     flexShrink="0"
//                     background="button-bg"
//                     color="button-color"
//                     flexGrow="1"
//                   >
//                     <VisuallyHidden>Sign in with Google</VisuallyHidden>

//                     <SettingsIcon
//                       fontSize="1em"
//                       display="inline-block"
//                       lineHeight="1em"
//                       flexShrink="0"
//                       color="yourColor"
//                       verticalAlign="yourAlign"
//                     />
//                   </Button>
//                   <Button
//                     type="button"
//                     display="inline-flex"
//                     alignItems="center"
//                     justifyContent="center"
//                     userSelect="none"
//                     position="relative"
//                     whiteSpace="nowrap"
//                     verticalAlign="middle"
//                     outline="2px solid transparent"
//                     outlineOffset="2px"
//                     lineHeight="1.25rem"
//                     borderRadius="lg"
//                     fontWeight="semibold"
//                     transition="common"
//                     height="10"
//                     minWidth="10"
//                     fontSize="sm"
//                     paddingLeft="4"
//                     paddingRight="4"
//                     borderWidth="1px"
//                     borderColor="border.emphasized"
//                     flexShrink="0"
//                     background="button-bg"
//                     color="button-color"
//                     flexGrow="1"
//                   >
//                     <VisuallyHidden>Sign in with Google</VisuallyHidden>

//                     <SettingsIcon
//                       fontSize="1em"
//                       display="inline-block"
//                       lineHeight="1em"
//                       flexShrink="0"
//                       color="yourColor"
//                       verticalAlign="yourAlign"
//                     />
//                   </Button>

//                   <Button
//                     type="button"
//                     display="inline-flex"
//                     alignItems="center"
//                     justifyContent="center"
//                     userSelect="none"
//                     position="relative"
//                     whiteSpace="nowrap"
//                     verticalAlign="middle"
//                     outline="2px solid transparent"
//                     outlineOffset="2px"
//                     lineHeight="1.25rem"
//                     borderRadius="lg"
//                     fontWeight="semibold"
//                     transition="common"
//                     height="10"
//                     minWidth="10"
//                     fontSize="sm"
//                     paddingLeft="4"
//                     paddingRight="4"
//                     borderWidth="1px"
//                     borderColor="border.emphasized"
//                     flexShrink="0"
//                     background="button-bg"
//                     color="button-color"
//                     flexGrow="1"
//                   >
//                     <VisuallyHidden>Sign in with Google</VisuallyHidden>
//                     <SettingsIcon
//                       fontSize="1em"
//                       display="inline-block"
//                       lineHeight="1em"
//                       flexShrink="0"
//                       color="yourColor"
//                       verticalAlign="yourAlign"
//                     />
//                   </Button>

//                   {/* Repeat the above for Twitter and GitHub */}
//                 </Flex>
//               </Flex>
//             </Flex>
//           </Container>
//         </Box>
//       </Flex>
//       <Flex
//         alignItems="center"
//         justifyContent="center"
//         flex="1 1 0%"
//         display="none"
//       >
//         <Flex display="flex" alignItems="center" flexDirection="column" gap="8">
//           <Flex display="flex" flexDirection="row" gap="3">
//             {/* Add testimonial content here */}
//           </Flex>
//           <Flex
//             display="flex"
//             alignItems="center"
//             flexDirection="column"
//             gap="4"
//           >
//             <Avatar
//               borderRadius="full"
//               display="inline-flex"
//               alignItems="center"
//               justifyContent="center"
//               textAlign="center"
//               textTransform="uppercase"
//               fontWeight="medium"
//               position="relative"
//               flexShrink="0"
//               background="avatar-bg"
//               fontSize="avatar-font-size"
//               color="white"
//               borderColor="avatar-border-color"
//               verticalAlign="top"
//               width="avatar-size"
//               height="avatar-size"
//               src="https://avatars.githubusercontent.com/u/20296626?v=4"
//               //  alt="Simon Holzmayer"
//             >
//               {/* You can add a fallback avatar icon or text here */}
//             </Avatar>
//             <Box
//               className="showcase-agwi45"
//               display="flex"
//               flexDirection="column"
//               gap="1"
//               textAlign="center"
//             >
//               <Box
//                 as="span" // or use another appropriate HTML element or Chakra component
//                 fontSize="md"
//                 lineHeight="1.5rem"
//                 fontWeight="medium"
//                 color="fg-muted"
//               >
//                 Simon Holzmayer
//               </Box>
//               <Text
//                 as="span" // or use another appropriate HTML element or Chakra component
//                 fontWeight="medium"
//                 fontSize="sm"
//                 lineHeight="1.25rem"
//                 color="fg-muted"
//               >
//                 simon@chakra-ui.com
//               </Text>
//             </Box>
//             <Flex
//               className="showcase-7zp8no"
//               align="center"
//               direction="row"
//               gap="0.5rem"
//             >
//               {/* Social Media Icons */}
//               {/* Replace with Chakra UI Icon Components */}
//               {[...Array(4)].map((_, index) => (
//                 <Icon
//                   key={index}
//                   viewBox="0 0 576 512"
//                   focusable="false"
//                   className="showcase-1mju1or"
//                   as="span" // or use another appropriate HTML element or Chakra component
//                   width="1em"
//                   height="1em"
//                   display="inline-block"
//                   lineHeight="1em"
//                   flexShrink="0"
//                   color="brand.500"
//                   fontSize="md"
//                 >
//                   {/* Add social media icon SVG data here */}
//                 </Icon>
//               ))}
//             </Flex>
//           </Flex>
//         </Flex>
//       </Flex>
//     </Box>
//   )
// }

// export default Signup
