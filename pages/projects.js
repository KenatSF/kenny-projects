import { Flex, Text, Box, TableContainer, Table, TableCaption, Thead, Tbody, Tr, Td, Th, Tfoot, TabPanels, Tab, TabList, Tabs, TabPanel, Link } from "@chakra-ui/react";
import React from "react";

import Datagrid from "../components/datagrid";
import Web3grid from "../components/web3grid";

export default function Projects() {

    return (
        <Flex direction="column" justifyContent="center" alignItems="center" width="60vw" height="100vh" bgColor="white">
            <Box flex="1" bg="white" px="52" py="20">
                <Tabs size="lg" colorScheme="white" align="center" variant="enclosed">
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
        </Flex>

    )
}