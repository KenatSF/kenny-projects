import { Box, Select } from "@chakra-ui/react";


export default function Languages() {
    async function changeLanguage(e){
        console.log(e.target.value);
    }
    return (
        <Box>
            <Select onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </Select>
        </Box>
    )
}