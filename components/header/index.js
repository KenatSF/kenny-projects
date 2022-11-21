import {Input, useClipboard } from "@chakra-ui/react";
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useState } from "react";
import React from 'react'

function Header() {
    const [mail, setMail] = useState('main.ksfg@gmail.com')
    const { hasCopied, onCopy } = useClipboard(mail)


    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.16"
                w="400px" h="400px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">;) Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, gray.600)" bgClip='text' >Kenat S. Flores</Text>
                    <Text>Software developer - Data scientist</Text>
                    <Flex mb={2}>
                        <Input value={mail} isReadOnly />
                        <Button onClick={onCopy} ml={2}>
                            {hasCopied ? 'Copied' : 'Copy'}
                        </Button>
                    </Flex>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='./myself.jpg' />
            </Flex>

        </Stack>
    )
}

export default Header