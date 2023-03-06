import { Box, useColorModeValue, Heading, Stack, Image, Text, Link, Button } from "@chakra-ui/react";


const Projectinfo = ({ image, linkTo, samePage, imageTittle, imageDescription, imageView, imageButton }) => {
  // console.log("SIMEI");
  // console.log(info);
  return (
    <Box
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Box
        rounded={"lg"}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 0,
          left: 0,
          backgroundImage: `url(${image})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={image}
        />

      </Box>
      <Stack pt={10} align={"center"}>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>

          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            {imageTittle}
          </Heading>

        </Heading>
      </Stack>

      <Stack pt={10} align={"left"}>
        <Text fontSize={"lg"} fontFamily={"body"} fontWeight={500}>
          {imageDescription}
        </Text>
      </Stack>



      <Stack pt={10} align={"center"}>
        <Text fontSize={"lg"} fontFamily={"body"} fontWeight={500}>
          {imageView}
        </Text>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
          <Button onClick={(e) => {
            e.preventDefault();
            if (!samePage) {
              window.open([linkTo]);
            } else {
              window.open([linkTo], "_self");
            }
          }}>
            <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {imageButton}
            </Text>
          </Button>
        </Heading>
      </Stack>
    </Box>
  );
};

export default Projectinfo;