import { Box, Select } from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default function Languages() {
    const router = useRouter();
    async function changeLanguage(e){
        console.log(e.target.value);
        router.push(router.pathname, router.pathname, {
            locale: e.target.value,
        });
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