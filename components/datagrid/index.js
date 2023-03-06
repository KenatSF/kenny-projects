import { Flex, Text, Grid, Box, SimpleGrid, TableContainer, Table, Tbody, Tr, Td } from "@chakra-ui/react";

import Projectinfo from "../projectinfo";


export default function Datagrid({data}) {

    return (
        <Box>
            <Grid templateColumns="repeat(1, minmax(250px, 1fr))" gap={6}>
                <Projectinfo image={"/datascience/electricity.jpg"} linkTo={"electricity"} samePage={true} imageTittle={data.projectsElectricityTittle} imageDescription={data.projectsElectricityDescription} imageView={data.projectsElectricityView} imageButton={data.projectsButton}/>
                <Projectinfo image={"/datascience/stockindices.jpg"} linkTo={"https://github.com/KenatSF/Heavy-Indexes/blob/main/ProyectoRedes.pdf"} samePage={false} imageTittle={data.projectsStockTittle} imageDescription={data.projectsStockDescription} imageView={data.projectsStockView} imageButton={data.projectsButton}/>
                <Projectinfo image={"/datascience/market.jpg"} linkTo={"https://github.com/KenatSF/Basic_Data_Analysis/blob/main/2_Exploratory_Analysis.ipynb"} samePage={false} imageTittle={data.projectsMarketSalesTittle} imageDescription={data.projectsMarketSalesDescription} imageView={data.projectsMarketSalesView} imageButton={data.projectsButton}/>
                <Projectinfo image={"/datascience/asset.jpg"} linkTo={"https://github.com/KenatSF/Bitcoin-fall-prediction/blob/main/project_r/2_model_selection.ipynb"} samePage={false} imageTittle={data.projectsAssetTittle} imageDescription={data.projectsAssetDescription} imageView={data.projectsAssetView} imageButton={data.projectsButton}/>
                <Projectinfo image={"/datascience/wallstreetbets.jpg"} linkTo={"https://github.com/KenatSF/WallStreetBets_Watcher"} samePage={false} imageTittle={data.projectsWallstreetTittle} imageDescription={data.projectsWallstreetDescription} imageView={data.projectsWallstreetView} imageButton={data.projectsButton}/>
                <Projectinfo image={"/datascience/covid.jpg"} linkTo={"https://public.tableau.com/app/profile/kenat2644/viz/CasosCovidEnero2020/Dashboard1"} samePage={false} imageTittle={data.projectsCovidTittle} imageDescription={data.projectsCovidDescription} imageView={data.projectsCovidView} imageButton={data.projectsButton}/>
            </Grid>
        </Box>

    )
}