import { Flex, Text, Grid, Box } from "@chakra-ui/react";

import Projectinfo from "../projectinfo";


export default function Web3grid() {

    return (
        <Flex direction="column" justifyContent="center" alignItems="center" width="50vw" height="50vh" bgColor="white">
            <Box>
                <Grid templateColumns="repeat(3, minmax(250px, 1fr))" gap={6}>
                    <Projectinfo titulillo={"NFT market"} image={"./web3/nft.jpg"} linkTo={"https://kronofungible.vercel.app/"} samePage={false}/>
                    <Projectinfo titulillo={"Flash loans"} image={"./web3/light.jpg"} linkTo={"https://github.com/KenatSF/Flash_Loans_V3"} samePage={false}/>
                    <Projectinfo titulillo={"Multisig"} image={"./web3/multisig.jpg"} linkTo={"https://github.com/KenatSF/Solidity_Multisig_Wallet"} samePage={false}/>
                </Grid>
            </Box>
        </Flex>

    )
}