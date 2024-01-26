import {
    Box,
    Stack,
    Container,
    Text,
    Heading,
    Avatar,
    Button,
    Link,
    Divider,
    Input,
    Flex,
  } from '@chakra-ui/react';
  
  const Signup = () => {
    return (
      <Box 
      paddingTop="12"
      paddingBottom="12"
      maxWidth="7xl"
      mx="auto"
      className="showcase-qkda03"
      >
        <Flex
        className="showcase-1idc0c1"
        direction="row"
        gap="12"
        >
          <Box className="showcase-13pmxen"   display="flex" flex="1 1 0%">
            <Container className="showcas-49waov"  
             paddingTop="8"
  paddingBottom="8"
  paddingLeft="10"
  paddingRight="10"
  background="bg.surface"
  boxShadow="md"
  borderRadius="xl"  >
              <Flex className="showcase-18936vg"
               direction="column"
               gap="8">
                <Flex
                align="center"
                direction="column"
                gap="6"
                >
                  <svg
                    viewBox="0 0 89 89"
                    xmlns="http://www.w3.org/2000/svg"
                    className="showcase-1yep4c0"
                    color="accent"
                    height="12"
                    width="auto"
                  >
                    {/* Add your SVG path data here */}
                  </svg>
                  <Flex className="showcase-67omth"
                  direction="column"
                  gap="3"
                  textAlign="center"
                  >
                    <Text
                    fontFamily="heading"
                    fontWeight="semibold"
                    fontSize="2xl"
                    lineHeight="2rem"
                    >Create an account</Text>
                    <Text color="fg.muted">
                      Already have an account? <Link 
                       transition="common"
                       transitionDuration="fast"
                       transitionTimingFunction="ease-out"
                       cursor="pointer"
                       textDecoration="none"
                       outline="2px solid transparent"
                       outlineOffset="2px"
                       color="brand.600"
                       position="relative"
                      
                      href="#">
                        Log in
                      </Link>
                    </Text>
                  </Flex>
                </Flex>
                <Flex className="showcase-ahthbn"
                 direction="column"
                 gap="6"
                >
                  {/* Form Controls and Input Fields */}
                  <Box className="showcase-1kxonj9" role="group"
                  
                  width="100%"
                  position="relative"
                  >
                    {/* Replace with Chakra UI Form Components */}
                    <Text 
                     display="block"
                     textAlign="start"
                     fontSize="sm"
                     marginEnd="3"
                     marginBottom="1.5"
                     fontWeight="medium"
                     transition="common"
                     transitionDuration="normal"
                     opacity="1"
                     color="fg.emphasized"
                    >
                      Email
                      <span  style={{ marginLeft: '1', color: 'red.500' }}>*</span>
                    </Text>
                    <Input type="email" id="email" required
                     width="100%"
                     minWidth="0"
                     outline="2px solid transparent"
                     outlineOffset="2px"
                     position="relative"
                     appearance="none"
                     transition="common"
                     fontSize="md"
                     paddingLeft="3"
                     paddingRight="3"
                     height="10"
                     borderRadius="lg"
                     borderWidth="1px"
                     borderStyle="solid"
                     borderColor="border.emphasized"
                     background="input-bg"
                     
                     />
             <Text 
                     display="block"
                     textAlign="start"
                     fontSize="sm"
                     marginEnd="3"
                     marginBottom="1.5"
                     fontWeight="medium"
                     transition="common"
                     transitionDuration="normal"
                     opacity="1"
                     color="fg.emphasized"
                    >
                      Password
                      <span  style={{ marginLeft: '1', color: 'red.500' }}>*</span>
                    </Text>
                    <Input type="password" id="password" required
                     width="100%"
                     minWidth="0"
                     outline="2px solid transparent"
                     outlineOffset="2px"
                     position="relative"
                     appearance="none"
                     transition="common"
                     fontSize="md"
                     paddingLeft="3"
                     paddingRight="3"
                     height="10"
                     borderRadius="lg"
                     borderWidth="1px"
                     borderStyle="solid"
                     borderColor="border.emphasized"
                     background="input-bg"
                     
                     />




                  </Box>
                  {/* Repeat the above for email and password fields */}
                  <Button type="button"
                   display="inline-flex"
                   alignItems="center"
                   justifyContent="center"
                   userSelect="none"
                   position="relative"
                   whiteSpace="nowrap"
                   verticalAlign="middle"
                   outline="2px solid transparent"
                   outlineOffset="2px"
                   lineHeight="1.25rem"
                   borderRadius="lg"
                   fontWeight="semibold"
                   transition="common"
                   height="10"
                   minWidth="10"
                   fontSize="sm"
                   paddingLeft="4"
                   paddingRight="4"
                   flexShrink="0"
                   background="button-bg"
                   color="button-color"
                  >
                    Create Account
                  </Button>
                  <Flex 
                   display="flex"
                   alignItems="center"
                   flexDirection="row"
                   gap="0.5rem"
                  >
                    <Divider orientation="horizontal" 
                    opacity="1"
                    borderWidth="0px 0px 1px"
                    borderColor="inherit"
                    borderStyle="solid"
                    width="100%"
                    />
                    <Text 
                    fontSize="sm"
                    lineHeight="1.25rem"
                    whiteSpace="nowrap"
                    color="fg.muted"
                    
                    >or sign up with</Text>
                    <Divider orientation="horizontal" 
                    opacity="1"
                    borderWidth="0px 0px 1px"
                    borderColor="inherit"
                    borderStyle="solid"
                    width="100%"
                    />
                  </Flex>
                  {/* Social Login Buttons */}
                  <Flex 
                   display="inline-flex"
                 justifyContent="stretch"
              data-orientation="horizontal">
                    {/* Replace with Chakra UI Button Components */}
                    <Button type="button" 
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      userSelect="none"
                      position="relative"
                      whiteSpace="nowrap"
                      verticalAlign="middle"
                      outline="2px solid transparent"
                      outlineOffset="2px"
                      lineHeight="1.25rem"
                      borderRadius="lg"
                      fontWeight="semibold"
                      transition="common"
                      height="10"
                      minWidth="10"
                      fontSize="sm"
                      paddingLeft="4"
                      paddingRight="4"
                      borderWidth="1px"
                      borderColor="border.emphasized"
                      flexShrink="0"
                      background="button-bg"
                      color="button-color"
                      flexGrow="1"
                    
                    
                    >
                      <Box
                      border="0"
                      clip="rect(0px, 0px, 0px, 0px)"
                      height="1px"
                      width="1px"
                      margin="-1px"
                      padding="0"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      position="absolute"
                      >Sign in with Google</Box>
                      <svg viewBox="0 0 24 24" focusable="false" className="showcase-onkibi">
                        {/* Add Google icon SVG data here */}
                      </svg>
                    </Button>
                    {/* Repeat the above for Twitter and GitHub */}
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          </Box>
        </Flex>
        <Container className="showcase-129mlto">
          <Stack className="showcase-abvxnf">
            <Stack className="showcase-1r0eoou">
              {/* Add testimonial content here */}
            </Stack>
            <Stack className="showcase-o51fhk">
              <Avatar className="showcase-bs24kp" src="https://avatars.githubusercontent.com/u/20296626?v=4"
              //  alt="Simon Holzmayer"
               >
                {/* You can add a fallback avatar icon or text here */}
              </Avatar>
              <Stack className="showcase-agwi45">
                <Text className="showcase-yyrevg">Simon Holzmayer</Text>
                <Text className="showcase-vluom6">simon@chakra-ui.com</Text>
              </Stack>
              <Stack className="showcase-7zp8no">
                {/* Social Media Icons */}
                {/* Replace with Chakra UI Icon Components */}
                {[...Array(4)].map((_, index) => (
                  <svg key={index} viewBox="0 0 576 512" focusable="false" className="showcase-1mju1or">
                    {/* Add social media icon SVG data here */}
                  </svg>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  };
  
  export default Signup;
  