import React, { useState, ReactNode } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

interface MenuItem {
  path: string;
  name: string;
  icon: ReactNode;
}

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem: MenuItem[] = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaBars />,
    },
    {
      path: "/products",
      name: "Products page",
      icon: <FaBars />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaBars />,
    },
    {
      path: "/review",
      name: "customer reviews",
      icon: <FaBars />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <FaBars />,
    },
    {
      path: "/login",
      name: "Login page",
      icon: <FaBars />,
    },
    {
      path: "/signup",
      name: "Signup Page",
      icon: <FaBars />,
    },
    {
      path: "/shop",
      name: "Sample products",
      icon: <FaBars />,
    },
    // ... (other menu items)
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;













// import React, { useState, ReactNode } from "react";
// import "./sidebar.css";
// import { NavLink } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import './sidebar.css'
// interface SidebarProps {
//   children: ReactNode;
// }

// interface MenuItem {
//   path: string;
//   name: string;
//   icon: ReactNode;
// }

// const Sidebar: React.FC<SidebarProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   const menuItem: MenuItem[] = [
//     {
//       path: "/dashboard",
//       name: "Dashboard",
//       icon: <i className="ri-dashboard-fill"></i>,
//     },
//     {
//       path: "/product",
//       name: "Products",
//       icon: <i className="ri-shopping-bag-line"></i>,
//     },
//     {
//       path: "/category",
//       name: "Category",
//       icon: <i className="ri-terminal-window-line"></i>,
//     },
//     {
//       path: "/analytics",
//       name: "Analytics",
//       icon: <i className="ri-bar-chart-box-fill"></i>,
//     },
//     {
//       path: "/review",
//       name: "CustemorReview",
//       icon: <i className="ri-feedback-fill"></i>,
//     },
//     {
//       path: "/shop",
//       name: "Products page",
//       icon: <i className="ri-shopping-bag-line"></i>,
//     },
//     {
//       path: "/orders",
//       name: "Orders Products",
//       icon: <i className="ri-list-unordered"></i>,
//     },
//     {
//       path: "/signup",
//       name: "Create account",
//       icon: <i className="ri-gps-fill"></i>,
//     },
//     {
//       path: "/login",
//       name: "login in system",
//       icon: <i className="ri-login-circle-line"></i>,
//     },
//   ];

//   return (
//     <div className="container">
//       <div
//         style={{ width: isOpen ? "250px" : " 50px" }}
//         className="sidebar"
//       >
//         <div className="top_section">
//           <h1
//             style={{ display: isOpen ? "block" : "none" }}
//             className="logo"
//           >
//             Logo
//           </h1>
//           <div style={{ marginLeft: isOpen ? "50px" : "0" }} className="bars">
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             // activeClassName="active"
//           >
//             <div className="icon">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="link_text"
//             >
//               {" "}
//               {item.name}{" "}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };
// export default Sidebar;
















// // import {
// //   Box,
// //   Flex,
// //   Heading,
// //   Input,
// //   InputGroup,
// //   InputLeftElement,
// //   Button,
// //   Stack,
// //   Collapse,
// //   Avatar,
// //   Text,
// // } from '@chakra-ui/react'
// // // import { SearchIcon,  } from '@chakra-ui/icons'

// // // import { CircleIcon } from "@chakra-ui/icons";
// // import { SearchIcon, CircleIcon } from "@chakra-ui/icons";



// // const Sidebar = () => {
// //   return (
// //     <Box display="flex" minHeight="100vh">
// //       <Box maxW="xs" pt="8" pb="8" pl="6" pr="6">
// //         <Flex direction="column" gap="8">
// //           {/* SVG */}
// //           <Box
// //             as="svg"
// //             viewBox="0 0 482 89"
// //             xmlns="http://www.w3.org/2000/svg"
// //             color="gray.500" // replace with the specific color from your theme
// //             height="8"
// //             width="auto"
// //             alignSelf="flex-start"
// //           >
// //             {/* Path */}
// //           </Box>

// //           {/* Search Input */}
// //           <Box
// //             width="100%"
// //             display="flex"
// //             position="relative"
// //             isolation="isolate"
// //             data-group="true"
// //           >
// //             <InputLeftElement>
// //               <Box 
// //                as={SearchIcon} 
// //               color="gray.300" />
// //             </InputLeftElement>
// //             <Input
// //               placeholder="Search"
// //               width="100%"
// //               minW="0"
// //               outline="2px solid transparent"
// //               outlineOffset="2px"
// //               position="relative"
// //               appearance="none"
// //               transitionProperty="var(--chakra-transition-property-common)"
// //               transitionDuration="var(--chakra-transition-duration-normal)"
// //               fontSize="md"
// //               paddingLeft="10"
// //               paddingRight="3"
// //               height="10"
// //               borderRadius="lg"
// //               background="var(--chakra-colors-bg-accent-subtle)"
// //               borderWidth="2px"
// //               borderColor="transparent"
// //               color="var(--chakra-colors-fg-accent-default)"
// //             />
// //           </Box>

// //           {/* Buttons */}
// //           <Box display="flex" flexDirection="column" gap="1">
// //             <Button
// //               type="button"
// //               display="inline-flex"
// //               alignItems="center"
// //               userSelect="none"
// //               position="relative"
// //               whiteSpace="nowrap"
// //               verticalAlign="middle"
// //               outline="transparent solid 2px"
// //               outlineOffset="2px"
// //               lineHeight="1.25rem"
// //               borderRadius="md"
// //               fontWeight="semibold"
// //               transitionProperty="common"
// //               transitionDuration="normal"
// //               height="10"
// //               minWidth="10"
// //               fontSize="sm"
// //               paddingInlineStart="4"
// //               paddingInlineEnd="4"
// //               color="fgAccentMuted"
// //               justifyContent="start"
// //             >
// //               Dashboard
// //             </Button>
// //             <Button
// //               type="button"
// //               display="inline-flex"
// //               alignItems="center"
// //               userSelect="none"
// //               position="relative"
// //               whiteSpace="nowrap"
// //               verticalAlign="middle"
// //               outline="transparent solid 2px"
// //               outlineOffset="2px"
// //               lineHeight="1.25rem"
// //               borderRadius="md"
// //               fontWeight="semibold"
// //               transitionProperty="common"
// //               transitionDuration="normal"
// //               height="10"
// //               minWidth="10"
// //               fontSize="sm"
// //               paddingInlineStart="4"
// //               paddingInlineEnd="4"
// //               color="fgAccentMuted"
// //               justifyContent="start"
// //             >
// //               Analysis
// //             </Button>

// //             {/* Document Button */}
// //             <Button
// //               type="button"
// //               display="inline-flex"
// //               alignItems="center"
// //               userSelect="none"
// //               position="relative"
// //               whiteSpace="nowrap"
// //               verticalAlign="middle"
// //               outline="transparent solid 2px"
// //               outlineOffset="2px"
// //               lineHeight="1.25rem"
// //               borderRadius="md"
// //               fontWeight="semibold"
// //               transitionProperty="common"
// //               transitionDuration="normal"
// //               height="10"
// //               minWidth="10"
// //               fontSize="sm"
// //               paddingInlineStart="4"
// //               paddingInlineEnd="4"
// //               color="fgAccentMuted"
// //               justifyContent="space-between"
// //               width="full"
// //             >
// //               <Flex
// //                 display="flex"
// //                 alignItems="center"
// //                 flexDirection="row"
// //                 gap="3"
// //               >
// //                 {/* Document Icon */}
// //                 <Box
// //                   as={CircleIcon}
// //                   width="1em"
// //                   height="1em"
// //                   display="inline-block"
// //                   lineHeight="1em"
// //                   flexShrink={0}
// //                   color="currentColor"
// //                 />
// //                 <Text className="chakra-text showcase-0">Documents</Text>
// //               </Flex>

// //               {/* Arrow Icon */}
// //               <Box
// //                 as="svg"
// //                 className="chakra-icon showcase-p1tijm"
// //                 height="1em"
// //                 width="1em"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 {/* Arrow Path */}
// //               </Box>
// //             </Button>

// //             {/* Collapse */}
// //             <Collapse>
// //               <Stack>
// //                 <Flex
// //                   display="inline-flex"
// //                   alignItems="center"
// //                   userSelect="none"
// //                   position="relative"
// //                   whiteSpace="nowrap"
// //                   verticalAlign="middle"
// //                   outline="transparent solid 2px"
// //                   outlineOffset="2px"
// //                   lineHeight="1.25rem"
// //                   borderRadius="md"
// //                   fontWeight="semibold"
// //                   transitionProperty="common"
// //                   transitionDuration="normal"
// //                   height="10"
// //                   minWidth="10"
// //                   fontSize="sm"
// //                   paddingLeft="4"
// //                   paddingRight="4"
// //                   color="gray.500" // Replace with your color variable
// //                   justifyContent="start"
// //                 >
// //                   Resumes
// //                 </Flex>
// //                 <Flex
// //                   display="inline-flex"
// //                   alignItems="center"
// //                   userSelect="none"
// //                   position="relative"
// //                   whiteSpace="nowrap"
// //                   verticalAlign="middle"
// //                   outline="transparent solid 2px"
// //                   outlineOffset="2px"
// //                   lineHeight="1.25rem"
// //                   borderRadius="md"
// //                   fontWeight="semibold"
// //                   transitionProperty="common"
// //                   transitionDuration="normal"
// //                   height="10"
// //                   minWidth="10"
// //                   fontSize="sm"
// //                   paddingLeft="4"
// //                   paddingRight="4"
// //                   color="gray.500" // Replace with your color variable
// //                   justifyContent="start"
// //                 >
// //                   Cover Letter
// //                 </Flex>
// //                 <Flex
// //                   display="inline-flex"
// //                   alignItems="center"
// //                   userSelect="none"
// //                   position="relative"
// //                   whiteSpace="nowrap"
// //                   verticalAlign="middle"
// //                   outline="transparent solid 2px"
// //                   outlineOffset="2px"
// //                   lineHeight="1.25rem"
// //                   borderRadius="md"
// //                   fontWeight="semibold"
// //                   transitionProperty="common"
// //                   transitionDuration="normal"
// //                   height="10"
// //                   minWidth="10"
// //                   fontSize="sm"
// //                   paddingLeft="4"
// //                   paddingRight="4"
// //                   color="gray.500" // Replace with your color variable
// //                   justifyContent="start"
// //                 >
// //                   Personal
// //                 </Flex>
// //                 <Flex
// //                   display="inline-flex"
// //                   alignItems="center"
// //                   userSelect="none"
// //                   position="relative"
// //                   whiteSpace="nowrap"
// //                   verticalAlign="middle"
// //                   outline="transparent solid 2px"
// //                   outlineOffset="2px"
// //                   lineHeight="1.25rem"
// //                   borderRadius="md"
// //                   fontWeight="semibold"
// //                   transitionProperty="common"
// //                   transitionDuration="normal"
// //                   height="10"
// //                   minWidth="10"
// //                   fontSize="sm"
// //                   paddingLeft="4"
// //                   paddingRight="4"
// //                   color="gray.500" // Replace with your color variable
// //                   justifyContent="start"
// //                 >
// //                   Education
// //                 </Flex>
// //               </Stack>
// //             </Collapse>

// //             <Flex
// //               display="inline-flex"
// //               alignItems="center"
// //               userSelect="none"
// //               position="relative"
// //               whiteSpace="nowrap"
// //               verticalAlign="middle"
// //               outline="transparent solid 2px"
// //               outlineOffset="2px"
// //               lineHeight="1.25rem"
// //               borderRadius="md"
// //               fontWeight="semibold"
// //               transitionProperty="common"
// //               transitionDuration="normal"
// //               height="10"
// //               minWidth="10"
// //               fontSize="sm"
// //               paddingLeft="4"
// //               paddingRight="4"
// //               color="gray.500" // Replace with your color variable
// //               justifyContent="start"
// //             >
// //               History
// //             </Flex>
// //             <Flex
// //               display="inline-flex"
// //               alignItems="center"
// //               userSelect="none"
// //               position="relative"
// //               whiteSpace="nowrap"
// //               verticalAlign="middle"
// //               outline="transparent solid 2px"
// //               outlineOffset="2px"
// //               lineHeight="1.25rem"
// //               borderRadius="md"
// //               fontWeight="semibold"
// //               transitionProperty="common"
// //               transitionDuration="normal"
// //               height="10"
// //               minWidth="10"
// //               fontSize="sm"
// //               paddingLeft="4"
// //               paddingRight="4"
// //               color="gray.500" // Replace with your color variable
// //               justifyContent="start"
// //             >
// //               Favorites
// //             </Flex>
// //           </Box>
// //         </Flex>

// //         {/* User Info */}
// //         <Flex className="chakra-stack showcase-j7qwjs">
// //           <Flex>
// //             <Stack className="showcase-0"></Stack>
// //             <Box className="chakra-stack__divider showcase-h2c347"></Box>
// //             <Stack className="chakra-stack showcase-1i2407o">
// //               <Button type="button" className="chakra-button showcase-1taa7gu">
// //                 <Box
// //                   as={SearchIcon}
// //                   className="chakra-icon showcase-1qx7bcs"
// //                   height="1em"
// //                   width="1em"
// //                 />
// //                 Help Center
// //               </Button>
// //               <Button type="button" className="chakra-button showcase-1taa7gu">
// //                 <Box
// //                   as={SearchIcon}
// //                   className="chakra-icon showcase-1qx7bcs"
// //                   height="1em"
// //                   width="1em"
// //                 />
// //                 Settings
// //               </Button>
// //             </Stack>
// //             <Box className="chakra-stack__divider showcase-h2c347"></Box>
// //             <Stack className="chakra-stack showcase-1qhmhb6">
// //               <Stack className="chakra-stack showcase-8pmr8q">
// //                 <Avatar
// //                   src="https://i.pravatar.cc/300"
// //                   className="chakra-avatar showcase-2v2ufd"
// //                 />
// //                 <Box className="showcase-0">
// //                   <Text className="chakra-text showcase-1gq2cps">John Doe</Text>
// //                   <Text className="chakra-text showcase-vdnkbr">
// //                     john@chakra-ui.com
// //                   </Text>
// //                 </Box>
// //               </Stack>
// //               <Button
// //                 type="button"
// //                 className="chakra-button showcase-19wwhko"
// //                 aria-label="Open Menu"
// //               >
// //                 <Box
// //                   as="svg"
// //                   className="chakra-icon showcase-p1tijm"
// //                   height="1em"
// //                   width="1em"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   {/* Menu Path */}
// //                 </Box>
// //               </Button>
// //             </Stack>
// //           </Flex>
// //         </Flex>
// //       </Box>
// //     </Box>
// //   )
// // }

// // export default Sidebar
