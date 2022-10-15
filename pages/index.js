import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Box, Container, Stack, Text, Link, useColorModeValue, Flex, IconButton,
  TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Center, Image
} from "@chakra-ui/react";
import { FaGithub, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


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

        <Text fontSize='3xl' noOfLines={[1]} as='b'>
          Hi, Welcome to my website!
        </Text>
        <br />
        <br />
        <br />
        <br />

        <Center h='80px' color='blackAlpha.700'>
          <Image src="./myself.jpg" alt='my self' width="200px" />
        </Center>
        <br />
        <br />
        <Center h='80px' color='blackAlpha.700'>
          <Text fontSize='45px' as='b'>Kenat S. Flores </Text>
        </Center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Text fontSize='35px' as='b'>
            An outstanding quote:
        </Text>
        <br />
        <Text fontSize='35px'>
          &quot;When every fact, every present or past phenomenon of that universe, every phase of present or past life therein, has been examined,
          classified, and co-ordinated with the rest, then the mission of science will be completed.&quot;
        </Text>
        <Text fontSize='30px'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          - Karl Pearson
        </Text>
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <Text fontSize='2xl' noOfLines={[1]} as='b'>
          &nbsp;&nbsp;&nbsp;&nbsp;Contact:
        </Text>
        <TableContainer>
          <Table variant='unstyled'>
            <Tbody>
              <Tr>
                <Td><FaRegEnvelope fontSize="1.5rem" /></Td>
                <Td>
                  <Text fontSize='xl'>
                    main.ksfg@gmail.com
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td><FaGithub fontSize="1.5rem" /></Td>
                <Td>
                  <Link href="https://github.com/KenatSF">
                    <Text fontSize='xl' noOfLines={[1]}>
                      @KenatSF
                    </Text>
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <Text fontSize='2xl' noOfLines={[1]} as='b'>
          &nbsp;&nbsp;&nbsp;&nbsp;Place:
        </Text>
        <TableContainer>
          <Table variant='unstyled'>
            <Tbody>
              <Tr>
                <Td><FaMapMarkerAlt fontSize="1.5rem" /></Td>
                <Td>
                  <Text fontSize='xl'>
                    Mexico City
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  )
}
