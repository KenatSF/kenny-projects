import { Image } from '@chakra-ui/image';
import { Flex, Box, Text, Spacer, HStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header({ myInfo }) {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Box>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start"
            >


                <Box align='flex-start'
                    w={isNotSmallerScreen ? "500px" : "350px"} h={isNotSmallerScreen ? "400" : "600"} >
                    <Image alignSelf="center"

                        backgroundColor="transparent" boxShadow="lg"
                        boxSize={isNotSmallerScreen ? "375px" : "600px"}
                        src='/myself.jpg' />
                </Box>
                <Spacer />
                <Box align='flex-start'
                    w={isNotSmallerScreen ? "500px" : "350px"} h={isNotSmallerScreen ? "400" : "400"} >
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, gray.600)" bgClip='text' >Kenat S. Flores</Text>
                    <Text fontSize="xl">{myInfo}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Header