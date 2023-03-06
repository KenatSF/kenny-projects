
import { VStack } from "@chakra-ui/layout";
import Header from "../components/header";
import Profile from "../components/profile";
import Social from "../components/social";

export default function Home(props) {
  const { web } = props;
  console.log(web);
  return (
    <VStack p={5}>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)

  return {
      props: {
        web: response.default.web,
      },
  };
}



