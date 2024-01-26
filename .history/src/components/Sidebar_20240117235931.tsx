import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Stack,
  Collapse,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { SearchIcon, CircleIcon } from "@chakra-ui/icons";

const Showcase = () => {
  return (
    <Box className="showcase-1rmghij">
      <Flex className="chakra-stack showcase-1llvqdc">
        <Flex className="chakra-stack showcase-18936vg">
          {/* SVG */}
          <Box as="svg" viewBox="0 0 482 89" xmlns="http://www.w3.org/2000/svg" className="showcase-nm2k89">
            {/* Path */}
          </Box>
          
          {/* Search Input */}
          <InputGroup className="chakra-input__group showcase-bx0blc" data-group="true">
            <InputLeftElement>
              <Box as={SearchIcon} color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Search" className="chakra-input showcase-tlmdj6" />
          </InputGroup>

          {/* Buttons */}
          <Stack spacing={4} className="chakra-stack showcase-1i2407o">
            <Button type="button" className="chakra-button showcase-1taa7gu">
              Dashboard
            </Button>
            <Button type="button" className="chakra-button showcase-1taa7gu">
              Analysis
            </Button>

            {/* Document Button */}
            <Button type="button" className="chakra-button showcase-16zjjfm">
              <Stack className="chakra-stack showcase-8pmr8q">
                {/* Document Icon */}
                <Box as={CircleIcon} className="chakra-icon showcase-13otjrl" height="1em" width="1em" />
                <Text className="chakra-text showcase-0">Documents</Text>
              </Stack>

              {/* Arrow Icon */}
              <Box as="svg" className="chakra-icon showcase-p1tijm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                {/* Arrow Path */}
              </Box>
            </Button>

            {/* Collapse */}
            <Collapse>
              <Stack>
                <Button type="button" className="chakra-button showcase-1taa7gu">
                  Resumes
                </Button>
                <Button type="button" className="chakra-button showcase-1taa7gu">
                  Cover Letter
                </Button>
                <Button type="button" className="chakra-button showcase-1taa7gu">
                  Personal
                </Button>
                <Button type="button" className="chakra-button showcase-1taa7gu">
                  Education
                </Button>
              </Stack>
            </Collapse>

            <Button type="button" className="chakra-button showcase-1taa7gu">
              History
            </Button>
            <Button type="button" className="chakra-button showcase-1taa7gu">
              Favorites
            </Button>
          </Stack>
        </Flex>

        {/* User Info */}
        <Flex className="chakra-stack showcase-j7qwjs">
          <Flex>
            <Stack className="showcase-0"></Stack>
            <Box className="chakra-stack__divider showcase-h2c347"></Box>
            <Stack className="chakra-stack showcase-1i2407o">
              <Button type="button" className="chakra-button showcase-1taa7gu">
                <Box as={CircleIcon} className="chakra-icon showcase-1qx7bcs" height="1em" width="1em" />
                Help Center
              </Button>
              <Button type="button" className="chakra-button showcase-1taa7gu">
                <Box as={CircleIcon} className="chakra-icon showcase-1qx7bcs" height="1em" width="1em" />
                Settings
              </Button>
            </Stack>
            <Box className="chakra-stack__divider showcase-h2c347"></Box>
            <Stack className="chakra-stack showcase-1qhmhb6">
              <Stack className="chakra-stack showcase-8pmr8q">
                <Avatar src="https://i.pravatar.cc/300" className="chakra-avatar showcase-2v2ufd" />
                <Box className="showcase-0">
                  <Text className="chakra-text showcase-1gq2cps">John Doe</Text>
                  <Text className="chakra-text showcase-vdnkbr">john@chakra-ui.com</Text>
                </Box>
              </Stack>
              <Button type="button" className="chakra-button showcase-19wwhko" aria-label="Open Menu">
                <Box as="svg" className="chakra-icon showcase-p1tijm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  {/* Menu Path */}
                </Box>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Showcase;
