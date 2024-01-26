import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Login } from "./pages/login/Login"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Login/>
  </ChakraProvider>
)
