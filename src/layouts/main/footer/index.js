import { Box, Container, Stack, Text, Link, useColorModeValue, Center, ButtonGroup, IconButton} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("blue.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack
            pt="8"
            pb="12"
            justify="space-between"
            direction={{ base: 'column-reverse', md: 'row' }}
            align="center"
          >
            <Text fontSize="sm" color="subtle">
              &copy; {new Date().getFullYear()} Kenat S. Flores
            </Text>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/kenatsf/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton as="a" href="https://github.com/KenatSF" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            </ButtonGroup>
          </Stack>

        </Container>
      </Box>
    </Box>
  );
};

export default Footer;