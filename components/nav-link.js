import { useState } from 'react'
import { useColorMode, Switch, Flex, Button, IconButton, Box, Text } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import Footer from '../src/layouts/main/footer'

export const DarkModeSwitch = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
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
                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                        >
                            Home
                        </Button>
                    </NextLink>

                    <NextLink href="/projects" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Projects"
                            my={5}
                            w="100%"
                        >
                            Projects
                        </Button>
                    </NextLink>

                    <NextLink href="/skills" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Skills"
                            my={5}
                            w="100%"
                        >
                            Skills
                        </Button>
                    </NextLink>
                </Flex>

                {/* Mobile */}
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
                <Switch
                    color="green"
                    isChecked={isDark}
                    onChange={toggleColorMode}
                />

            </Flex>

            {/* Mobile Content */}
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
                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                        >
                            Home
                        </Button>
                    </NextLink>

                    <NextLink href="/projects" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Projects"
                            my={5}
                            w="100%"
                        >
                            Projects
                        </Button>
                    </NextLink>

                    <NextLink href="/skills" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Skills"
                            my={5}
                            w="100%"
                        >
                            Skills
                        </Button>
                    </NextLink>
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