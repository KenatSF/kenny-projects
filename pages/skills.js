import { Flex, Text, Box, Center, Image, Menu, Portal, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";


export default function Skills() {

    return (
        <Box>
            <Center>
                <Text fontSize={{ base: '24px', md: '30px', lg: '45px' }}  >Skills</Text>
            </Center>
            <Center>
                <Box boxSize='xs'>
                    <Image src="./rubikCube.png" alt='skills' />
                </Box>
            </Center>
            <br />
            <br />
            <br />
            <Menu>
                <MenuButton>
                    <Text fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}  noOfLines={[1]} as='b'>
                        Data science Packages ↓
                    </Text>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Pandas
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Numpy
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Scikit-Learn
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Keras
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Statsmodels
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Networkx
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Nltk
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Matplotlib
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Seaborn
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - tseries
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - survival
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - ggplot2
                        </Text></MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
            <br />
            <br />
            <Menu>
                <MenuButton>
                    <Text fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}  noOfLines={[1]} as='b'>
                        Programming Languages ↓
                    </Text>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Python.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - R.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Javascript.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Solidity.
                        </Text></MenuItem>

                    </MenuList>
                </Portal>
            </Menu>
            <br />
            <br />
            <Menu>
                <MenuButton>
                    <Text fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}  noOfLines={[1]} as='b'>
                        Database ↓
                    </Text>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - SQL.
                        </Text></MenuItem>

                    </MenuList>
                </Portal>
            </Menu>
            <br />
            <br />
            <Menu>
                <MenuButton>
                    <Text fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}  noOfLines={[1]} as='b'>
                        Data visualization ↓
                    </Text>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Power BI.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Tableau.
                        </Text></MenuItem>

                    </MenuList>
                </Portal>
            </Menu>
            <br />
            <br />
            <Menu>
                <MenuButton>
                    <Text fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}  noOfLines={[1]} as='b'>
                        Frameworks ↓
                    </Text>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Next.js.
                        </Text></MenuItem>

                    </MenuList>
                </Portal>
            </Menu>
            <br />
            <br />
            <Menu>
                <MenuButton>
                    <Text fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}  noOfLines={[1]} as='b'>
                        Knowledge ↓
                    </Text>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Probability.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Numpy
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Statistics.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Generalized Linear Models.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Time Series.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Survival Analysis.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Network Theory.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Machine Learning.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Deep Learning.
                        </Text></MenuItem>

                    </MenuList>
                </Portal>
            </Menu>
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
            <br />
            <br />
            <br />
            <br />
        </Box>
    )
}