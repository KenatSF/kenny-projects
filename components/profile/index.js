import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Link } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icon';
import { DiBackbone, DiWebplatform } from 'react-icons/di'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Text fontSize={{ base: '24px', md: '24px', lg: '32px' }} color="gray.400">
                    &quot;When every fact, every present or past phenomenon of that universe, every phase of present or past life therein, has been examined,
                    classified, and co-ordinated with the rest, then the mission of science will be completed.&quot;
                </Text>
                <Heading fontWeight="extrabold" color="blue.500" size="2xl">
                    - Karl Pearson
                </Heading>
            </Box>
            <Box alignSelf="center" px="30" py="16">
                <Text fontWeight="bold" fontSize="2xl">Info: </Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Link href='/projects'>
                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                            <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
                            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                Data science & Web3
                            </Text>
                        </Flex>
                    </Link>
                    <Link href='/skills'>
                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                            _hover={{ bg: "green.400", }}>
                            <Icon color="black" p="4" as={DiBackbone} w="24" h="24" />
                            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                Skills
                            </Text>
                        </Flex>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Profile