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
                      Name
                      <span  style={{ marginLeft: '1', color: 'red.500' }}>*</span>
                    </Text>
                    <input type="text" id="name"
                     required="true" 
                     aria-required="true" className="showcase-1pmfxiu" />
                  </Box>
                  {/* Repeat the above for email and password fields */}
                  <Button type="button" className="showcase-18uf5hq">
                    Create Account
                  </Button>
                  <Stack className="showcase-1igwmid">
                    <Divider orientation="horizontal" className="showcase-ip97q7" />
                    <Text className="showcase-fnhcl3">or sign up with</Text>
                    <Divider orientation="horizontal" className="showcase-ip97q7" />
                  </Stack>
                  {/* Social Login Buttons */}
                  <Stack className="chakra-button__group showcase-1v82kfi" data-orientation="horizontal">
                    {/* Replace with Chakra UI Button Components */}
                    <Button type="button" className="showcase-oyx1g3">
                      <span className="showcase-idkz9h">Sign in with Google</span>
                      <svg viewBox="0 0 24 24" focusable="false" className="showcase-onkibi">
                        {/* Add Google icon SVG data here */}
                      </svg>
                    </Button>
                    {/* Repeat the above for Twitter and GitHub */}
                  </Stack>
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
  