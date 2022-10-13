import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Stack, Text, Link, useColorModeValue, Flex } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex minH="100vh" direction="column">
        <Box
            mx="auto"
            maxW={"7xl"}
            width="100%"
            bg={useColorModeValue("white", "gray.800")}
            px={4}
        >
          <Text>
            Hello fucking world!.
          </Text>
        </Box>
    </Flex>
)
}
