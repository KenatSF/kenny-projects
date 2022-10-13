import { Flex, Text, Grid } from "@chakra-ui/react";

import Projectinfo from "../projectinfo";


export default function Projectsgrid() {

    return (
        <Flex direction="column" justifyContent="center" alignItems="center" width="50vw" height="50vh" bgColor="white">
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
                <Projectinfo titulillo={"AI"} image={""} />
                <Projectinfo titulillo={"Otros"} image={""} />
            </Grid>
        </Flex>

    )
}