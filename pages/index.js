
import { VStack } from "@chakra-ui/layout";
import Header from "../components/header";
import Profile from "../components/Profile";
import Social from "../components/Social";

export default function Home() {
  return (
    <VStack p={5}>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}





