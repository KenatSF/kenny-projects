import { Flex, Text, Box, TabPanels, Tab, TabList, Tabs, TabPanel, Link, Center, Image } from "@chakra-ui/react";
import React from "react";

import Datagrid from "../components/datagrid";
import Web3grid from "../components/web3grid";

export default function Projects() {

    return (
        <Box flex="1" px={{ base: '25', md: '100', lg: '400' }} py="20">
            <Center>
                <Text fontSize={{ base: '24px', md: '30px', lg: '45px' }}  >Projects</Text>
            </Center>
            <Center>
                <Box boxSize='xs'>
                    <Image src="./portfolio.png" alt='projects' />
                </Box>
            </Center>
            <br />
            <Tabs size="lg" colorScheme="white" align={{ base: 'end', md: 'center', lg: 'center' }} variant="enclosed">
                <TabList>
                    <Tab fontWeight="bold">Data science</Tab>
                    <Tab fontWeight="bold">Web 3.0</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Datagrid />
                    </TabPanel>
                    <TabPanel>
                        <Web3grid />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

    )
}