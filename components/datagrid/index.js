import { Flex, Text, Grid, Box } from "@chakra-ui/react";

import Projectinfo from "../projectinfo";


export default function Datagrid() {

    return (
        <Flex direction="column" justifyContent="center" alignItems="center" width="50vw" height="50vh" bgColor="white">
            <Box>
                <Grid templateColumns="repeat(4, minmax(250px, 1fr))" gap={6}>
                    <Projectinfo titulillo={"Market sales"} image={"./datascience/market.jpg"} linkTo={"https://github.com/KenatSF/Basic_Data_Analysis"} samePage={false}/>
                    <Projectinfo titulillo={"Electricity consumption"} image={"./datascience/electricity.jpg"} linkTo={"electricity"} samePage={true}/>
                    <Projectinfo titulillo={"Stock Indices"} image={"./datascience/stockindices.jpg"} linkTo={"/centrality"} samePage={true}/>
                    <Projectinfo titulillo={"Bitcoin crash prediction"} image={"./datascience/bitcoin.jpg"} linkTo={"https://github.com/KenatSF/Bitcoin-fall-prediction"} samePage={false}/>
                </Grid>
            </Box>
        </Flex>

    )
}