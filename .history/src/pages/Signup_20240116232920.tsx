import {
    Box,
    Stack,
    Container,
    Text,
    Input,
    Button,
    Divider,
    Avatar,
    Icon,
  } from "@chakra-ui/react";
  import { EmailIcon, LockIcon, GoogleIcon, TwitterIcon, GitHubIcon } from "@chakra-ui/icons";
  
  const Signup = () => {
    return (
      <Box className="showcase-qkda03">
        <Stack className="chakra-stack showcase-1idc0c1">
          {/* ... Other components ... */}
          <Container className="chakra-container showcase-49waov">
            <Stack className="chakra-stack showcase-18936vg">
              <Stack className="chakra-stack showcase-1urha0v">
                <Icon as={SomeSVGIcon} viewBox="0 0 89 89" className="showcase-1yep4c0" />
                <Stack className="chakra-stack showcase-67omth">
                  <Text className="chakra-heading showcase-186mwu8">Create an account</Text>
                  <Text className="chakra-text showcase-1xrpz2b">
                    Already have an account?{" "}
                    <a className="chakra-link showcase-1459x9" href="#">
                      Log in
                    </a>
                  </Text>
                </Stack>
              </Stack>
              {/* ... Other components ... */}
              <Stack className="chakra-stack showcase-1igwmid">
                <Divider orientation="horizontal" className="chakra-divider showcase-ip97q7" />
                <Text className="chakra-text showcase-fnhcl3">or sign up with</Text>
                <Divider orientation="horizontal" className="chakra-divider showcase-ip97q7" />
              </Stack>
              <Stack className="chakra-button__group showcase-1v82kfi" direction="row">
                <Button className="chakra-button showcase-oyx1g3">
                  <span className="showcase-idkz9h">Sign in with Google</span>
                  <GoogleIcon />
                </Button>
                <Button className="chakra-button showcase-oyx1g3">
                  <span className="showcase-idkz9h">Sign in with Twitter</span>
                  <TwitterIcon />
                </Button>
                <Button className="chakra-button showcase-oyx1g3">
                  <span className="showcase-idkz9h">Sign in with GitHub</span>
                  <GitHubIcon />
                </Button>
              </Stack>
            </Stack>
          </Container>
          {/* ... Other components ... */}
        </Stack>
        <Box className="showcase-129mlto">
          <Stack className="chakra-stack showcase-abvxnf">
            {/* ... Other components ... */}
            <Stack className="chakra-stack showcase-7zp8no" direction="row">
              {[1, 2, 3, 4].map((index) => (
                <Icon key={index} as={SomeOtherIcon} viewBox="0 0 16 16" className="chakra-icon showcase-1mju1or" />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>
    );
  };
  
  export default Signup;
  