import * as React from "react"
import {
  ChakraProvider,
  Box,  
  theme,
} from "@chakra-ui/react"
import Signup from "./pages/Signup"
// import { Login } from "./pages/login/Login"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Signup/>
    {/* <Login/> */}
    </Box>
  </ChakraProvider>
)
