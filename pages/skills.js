import { Flex, Text, Box, Center, Image, Menu, Portal, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";


export default function Skills(props) {
    const { web } = props;

    return (
        <Box>
            <Center>
                <Text fontSize={{ base: '24px', md: '30px', lg: '45px' }}  >{web.tittleSkills}</Text>
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
                        {web.dataSciencePackages} ↓
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
                    {web.programmingLanguages} ↓
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
                    {web.dataBase} ↓
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
                    {web.dataVisualization} ↓
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
                    {web.frameworks} ↓
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
                    {web.knowledge} ↓
                    </Text>
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {web.probability}.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {web.statistics}.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {web.generalized}.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {web.timeSeries}.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {web.survival}.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {web.network}.
                        </Text></MenuItem>
                        <MenuItem><Text fontSize='xl' noOfLines={[1, 2, 3]} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - {web.deep}.
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

export async function getStaticProps({ locale }) {
    const response = await import(`../lang/${locale}.json`)
  
    return {
        props: {
          web: response.default.web,
        },
    };
  }