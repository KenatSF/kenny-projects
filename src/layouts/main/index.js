import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Image, Heading, Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


import Footer from "./footer";



const MainLayout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex minH="100vh" direction="column">
            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                bg={useColorModeValue("white", "gray.800")}
                px={4}
            >
                <Flex
                    bg={useColorModeValue("blue.50", "gray.800")}
                    color={useColorModeValue("gray.600", "white")}
                    minH={"60px"}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.900")}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Flex alignItems="center">
                            <Link href="/">
                                <Image src="./favicon.ico" width="80px" />
                            </Link>
                        </Flex>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            <Link href="/projects">Projects</Link>
                            <Link href="/skills">Skills</Link>
                        </HStack>
                    </HStack>
                </Flex>
            </Box>
            <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
                {children}
            </Box>
            <Footer />
        </Flex>
    );
};

export default MainLayout;