import { Flex, Text, Grid, Box, SimpleGrid, TableContainer, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/media-query';
import Projectinfo from "../projectinfo";


export default function Datagrid() {
    // Datagrid({data})

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Box>
            <Grid templateColumns={isNotSmallerScreen ? "repeat(4, minmax(350px, 1fr))" : "repeat(1, minmax(250px, 1fr))"}>
                <Projectinfo 
                    image={"/datascience/market.jpg"} 
                    linkTo={"https://github.com/KenatSF/Basic_Data_Analysis/blob/main/2_Exploratory_Analysis.ipynb"} 
                    samePage={false} 
                    imageTittle={"Market Sales"} 
                    imageDescription={"Analysis of a sales database using Python."} 
                    imageView={"Code"} 
                    imageButton={"Go"} />
                <Projectinfo 
                    image={"/datascience/electricity.jpg"} 
                    linkTo={"https://github.com/KenatSF/Electricity_Consumption"} 
                    samePage={false} 
                    imageTittle={"Electricity Consumption"} 
                    imageDescription={"Most interesting public companies to invest in the energy sector."} 
                    imageView={"Research"} 
                    imageButton={"Go"} />
                <Projectinfo 
                    image={"/datascience/asset.png"} 
                    linkTo={"https://github.com/KenatSF/Bitcoin-fall-prediction/blob/main/project_r/2_model_selection.ipynb"} 
                    samePage={false} 
                    imageTittle={"Asset crash prediction"} 
                    imageDescription={"Construction of models to predict the eventual falls of the asset."} 
                    imageView={"Code"} 
                    imageButton={"Go"} />         
                <Projectinfo 
                    image={"/datascience/wallstreetbets.jpg"} 
                    linkTo={"https://github.com/KenatSF/WallStreetBets_Watcher"} 
                    samePage={false} 
                    imageTittle={"WallStreetBets"} 
                    imageDescription={"Analysis of the posts in reddit for investment decision making."} 
                    imageView={"Code"} 
                    imageButton={"Go"} />
                
            </Grid>
            <Grid templateColumns={isNotSmallerScreen ? "repeat(4, minmax(350px, 1fr))" : "repeat(1, minmax(250px, 1fr))"}>
                <Projectinfo 
                    image={"/datascience/covid.jpg"} 
                    linkTo={"https://app.powerbi.com/view?r=eyJrIjoiMzVhODMxZDEtOTQwNS00ZjhjLTk4Y2QtNmU1MGM3YmUyM2RiIiwidCI6ImU4NDQ4ZDZjLWM0ZjctNDQ2Ny1hZWMwLWU5NTdkNzcyNTFhMyJ9"} 
                    samePage={false} 
                    imageTittle={"Covid"} 
                    imageDescription={"Analysis of the last week of January in 2020."} 
                    imageView={"Dashboard"} 
                    imageButton={"Go"} />
            </Grid>
            <Grid templateColumns={isNotSmallerScreen ? "repeat(4, minmax(350px, 1fr))" : "repeat(1, minmax(250px, 1fr))"}>
                <Projectinfo 
                    image={"/datascience/stockindices.jpg"} 
                    linkTo={"https://github.com/KenatSF/Heavy-Indexes/blob/main/ProyectoRedes.pdf"} s
                    amePage={false} 
                    imageTittle={"Stock Indices"} 
                    imageDescription={"Find the most important stock market indices."} 
                    imageView={"Research"} 
                    imageButton={"Go"} />
            </Grid>
        </Box>

    )
}