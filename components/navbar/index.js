import { useState } from 'react'
import { useColorMode, Switch, Flex, Button, IconButton, Box, Text } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Footer from '../footer'
import Languages from '../languages'
import { useRouter } from 'next/router'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export const Navbar = ({ children }) => {
    // export const Navbar = ({ children, props }) 
    const { colorMode, toggleColorMode } = useColorMode('dark');
    const [display, changeDisplay] = useState('none');
    const router = useRouter();

    // const { web } = props;
    // console.log(web);

    const web = {
        home: "Home",
        projects: "Projects",
        skills: "Skills"
    }

    async function myHome() {
        router.push("/");
    }
    async function myProjects() {
        router.push("/projects");
    }
    async function mySkills() {
        router.push("/skills");
    }


    return (
        <Flex>
            <Flex
                position="fixed"
                top="1rem"
                right="1rem"
                align="center"
            >
                {/* Desktop */}
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                >
                    <Button
                        onClick={myHome}
                        as="a"
                        variant="ghost"
                        aria-label="Home"
                        my={5}
                        w="100%"
                    >
                        {web.home}
                    </Button>
                    <Button
                        onClick={myProjects}
                        as="a"
                        variant="ghost"
                        aria-label="Projects"
                        my={5}
                        w="100%"
                    >
                        {web.projects}
                    </Button>
                    <Button
                        onClick={mySkills}
                        as="a"
                        variant="ghost"
                        aria-label="Skills"
                        my={5}
                        w="100%"
                    >
                        {web.skills}
                    </Button>
                </Flex>
                {/* <Flex
                    display={['none', 'none', 'flex', 'flex']}>
                    <Languages />
                </Flex> */}
                <Flex
                    display={['none', 'none', 'flex', 'flex']}>
                    <IconButton mt={0} aria-label="Toggle Mode" onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </IconButton>
                </Flex>


                {/* The next IconButton is the HamburgerIcon when the view is from a mobile. */}
                <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={
                        <HamburgerIcon />
                    }
                    onClick={() => changeDisplay('flex')}
                    display={['flex', 'flex', 'none', 'none']}
                />



            </Flex>

            {/* Mobile */}
            <Flex
                w='100vw'
                display={display}
                bgColor="gray.500"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
            >
                {/*     The next Flex is the X button to close the HamburgerIcon.
                */}.
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Open Menu"
                        size="lg"
                        icon={
                            <CloseIcon />
                        }
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>

                <Flex
                    flexDir="column"
                    align="center"
                >
                    <Button
                        onClick={myHome}
                        as="a"
                        variant="ghost"
                        aria-label="Home"
                        my={5}
                        w="100%"
                    >
                        {web.home}
                    </Button>
                    <Button
                        onClick={myProjects}
                        as="a"
                        variant="ghost"
                        aria-label="Projects"
                        my={5}
                        w="100%"
                    >
                        {web.projects}
                    </Button>
                    <Button
                        onClick={mySkills}
                        as="a"
                        variant="ghost"
                        aria-label="Skills"
                        my={5}
                        w="100%"
                    >
                        {web.skills}
                    </Button>
                </Flex>
                {/* <Flex
                    flexDir="column"
                    align="center"
                >
                    <Languages />
                </Flex> */}
                <Flex
                    flexDir="column"
                    align="center"
                    >
                    <IconButton mt={10} aria-label="Toggle Mode" onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </IconButton>
                </Flex>
            </Flex>
            <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
                {children}
                <Box>
                    <Footer />
                </Box>
            </Box>

        </Flex>
    )
}

