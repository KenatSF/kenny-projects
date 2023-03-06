import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Link } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icon';
import { DiBackbone, DiWebplatform } from 'react-icons/di'
import { useState } from "react";
import { Input, useClipboard } from "@chakra-ui/react";
import { Button } from '@chakra-ui/button';
import { useRouter } from 'next/router'

function Description({ infoLeft, infoRight, text1, text2, text3, text4, mailText, karl }) {
    const router = useRouter();
    const [mail, setMail] = useState('main.ksfg@gmail.com');
    const { hasCopied, onCopy } = useClipboard(mail);

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    async function myProjects() {
        router.push("/projects");
    }
    async function mySkills() {
        router.push("/skills");
    }


    return (
        <Box >
            <Box w={isNotSmallerScreen ? "500px" : "350px"} h={isNotSmallerScreen ? "700" : "900"} >
                <br />
                <br />
                <Text fontSize='xl'>{text1}</Text>
                <br />
                <Text fontSize='xl'>{text2}</Text>
                <br />
                <Text fontSize='xl'>{text3}</Text>
                <br />
                <Text fontSize='xl'>{text4}</Text>
                <br />
                <br />
                <br />


            </Box>
            <Box w={isNotSmallerScreen ? "500px" : "350px"} h={isNotSmallerScreen ? "300" : "100"} >
                <br />
                <br />

                <Text>{mailText} main.ksfg@gmail.com</Text>
                <Button onClick={onCopy} ml={0}>
                    {hasCopied ? 'Copied' : 'Copy'}
                </Button>
                <br />


            </Box>

            <Box w={isNotSmallerScreen ? "700px" : "400px"} h={isNotSmallerScreen ? "200" : "500"}>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} alignSelf="flex-start">
                    <Button
                        onClick={myProjects}
                        as="a"
                        variant="ghost"
                        aria-label="Projects"
                        my={isNotSmallerScreen ? 0 : 100}
                    >
                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="100vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                            <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
                            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                {infoLeft}
                            </Text>
                        </Flex>
                    </Button>
                    <Button
                        onClick={mySkills}
                        as="a"
                        variant="ghost"
                        aria-label="Skills"
                        my={isNotSmallerScreen ? 0 : 100}
                    >
                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="100vh" justify="flex-end" _hover={{ bg: "green.400", }}>
                            <Icon color="black" p="4" as={DiBackbone} w="24" h="24" />
                            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                {infoRight}
                            </Text>
                        </Flex>
                    </Button>
                </Flex>
            </Box>



            <Box alignSelf="left" px="16" py="16">
                <Text w={isNotSmallerScreen ? "400px" : "200px"} h={isNotSmallerScreen ? "200" : "300"} color="gray.400">
                    &quot;{karl}&quot;
                </Text>
                <Heading fontWeight="extrabold" color="blue.500" size="2xl">
                    - Karl Pearson
                </Heading>
            </Box>
        </Box>
    )
}

export default Description