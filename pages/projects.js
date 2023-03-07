import { Flex, Text, Box, TabPanels, Tab, TabList, Tabs, TabPanel, Link, Center, Image } from "@chakra-ui/react";
import React from "react";

import Datagrid from "../components/datagrid";
import Web3grid from "../components/web3grid";

export default function Projects() {
    // Projects(props)
    //const { web } = props;

    return (
        <Box flex="1" px={{ base: '25', md: '30', lg: '30' }} py="1">
            <Center>
                <Text fontSize={{ base: '24px', md: '30px', lg: '45px' }}  >Projects</Text>
            </Center>
            <Center>
                <Box boxSize='xs'>
                    <Image src="/portfolio.png" alt='projects' />
                </Box>
            </Center>
            <br />
            <Tabs variant="enclosed">
                <TabList>
                    <Tab fontWeight="bold">Data Science</Tab>
                    <Tab fontWeight="bold">BlockChain</Tab>
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

// export async function getStaticProps({ locale }) {
//     const response = await import(`../lang/${locale}.json`)
  
//     return {
//         props: {
//           web: response.default.web,
//         },
//     };
//   }