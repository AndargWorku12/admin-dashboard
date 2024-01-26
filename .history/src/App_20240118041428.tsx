import * as React from "react"
import {
  ChakraProvider,
  Box,  
  theme,
} from "@chakra-ui/react"
// import ShopCard from "./pages/ShopCard"
// import Signup from "./pages/Signup"
import {Sidebar} from "./components/Sidebar.tsx"
// import { Login } from "./pages/login/Login"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      {/* <Signup/> */}
      {/* <ShopCard/> */}
    {/* <Login/> */}
    <Sidebar/>
    </Box>
  </ChakraProvider>
)
