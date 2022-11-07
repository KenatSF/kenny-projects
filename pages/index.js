
import { VStack } from "@chakra-ui/layout";
import Header from "../components/header";
import Profile from "../components/profile";
import Social from "../components/social";

export default function Home() {
  return (
    <VStack p={5}>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}





