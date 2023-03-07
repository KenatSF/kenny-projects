import { Flex, Text, Grid, Box } from "@chakra-ui/react";

import Projectinfo from "../projectinfo";


export default function Web3grid() {
    // Web3grid({ data }) 

    return (
        <Box>
            <Grid templateColumns="repeat(1, minmax(250px, 1fr))" gap={6}>
                <Projectinfo
                    image={"/web3/light.jpg"}
                    linkTo={"https://github.com/KenatSF/Flash_Loans_V3"}
                    samePage={false}
                    imageTittle={"Flash Loans"}
                    imageDescription={"Borrow money to operate in the blockchain in a single transaction."}
                    imageView={"Code"}
                    imageButton={"Go"} />
                <Projectinfo
                    image={"/web3/hacker.jpg"}
                    linkTo={"https://github.com/KenatSF/Hacking_DeFi_Protocols"}
                    samePage={false}
                    imageTittle={"Hacking Protocols"}
                    imageDescription={"Understand some hacks from the real world."}
                    imageView={"Code"}
                    imageButton={"Go"} />
                <Projectinfo
                    image={"/web3/nft.jpg"}
                    linkTo={"https://github.com/KenatSF/MarketCore/tree/main/contracts"}
                    samePage={false}
                    imageTittle={"NFT Market"}
                    imageDescription={"Build your own Market."}
                    imageView={"Code"}
                    imageButton={"Go"} />
                <Projectinfo
                    image={"/web3/multisig.jpg"}
                    linkTo={"https://github.com/KenatSF/Solidity_Multisig_Wallet/blob/main/contracts/Firmas.sol"}
                    samePage={false}
                    imageTittle={"Multisignature"}
                    imageDescription={"Save your funds safely."}
                    imageView={"Code"}
                    imageButton={"Go"} />
            </Grid>
        </Box>

    )
}