import * as React from "react"
import {
  ChakraProvider,
  Box,  
  theme,
} from "@chakra-ui/react"

import { Login } from "./pages/login/Login"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
    <Login/>
    </Box>
  </ChakraProvider>
)
