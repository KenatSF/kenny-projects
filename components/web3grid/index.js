import { Flex, Text, Grid, Box } from "@chakra-ui/react";

import Projectinfo from "../projectinfo";


export default function Web3grid({data}) {

    return (
        <Box>
            <Grid templateColumns="repeat(1, minmax(250px, 1fr))" gap={6}>
                <Projectinfo image={"/web3/light.jpg"} linkTo={"https://github.com/KenatSF/Flash_Loans_V3"} samePage={false} imageTittle={data.projectsFlashTittle} imageDescription={data.projectsFlashDescription} imageView={data.code} imageButton={data.projectsButton}/>
                <Projectinfo image={"/web3/hacker.jpg"} linkTo={"https://github.com/KenatSF/Hacking_DeFi_Protocols"} samePage={false} imageTittle={data.projectsHacksTittle} imageDescription={data.projectsHacksDescription} imageView={data.code} imageButton={data.projectsButton}/>
                <Projectinfo image={"/web3/nft.jpg"} linkTo={"https://github.com/KenatSF/MarketCore/tree/main/contracts"} samePage={false} imageTittle={data.projectsNFTTittle} imageDescription={data.projectsNFTDescription} imageView={data.code} imageButton={data.projectsButton}/>
                <Projectinfo image={"/web3/multisig.jpg"} linkTo={"https://github.com/KenatSF/Solidity_Multisig_Wallet/blob/main/contracts/Firmas.sol"} samePage={false} imageTittle={data.projectsMultiTittle} imageDescription={data.projectsMultiDescription} imageView={data.code} imageButton={data.projectsButton}/>
            </Grid>
        </Box>

    )
}