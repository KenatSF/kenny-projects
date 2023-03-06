
import { VStack } from "@chakra-ui/layout";
import Header from "../components/header";
import Description from "../components/description";
import Social from "../components/social";

export default function Home(props) {
  const { web } = props;
  console.log(web);
  return (
    <VStack p={5}>
      <Header myInfo={web.mySelfInfo}></Header>
      <Social></Social>
      <Description
        infoLeft={web.projects}
        infoRight={web.skills}
        text1={web.textoDescription1}
        text2={web.textoDescription2}
        text3={web.textoDescription3}
        text4={web.textoDescription4}
        mailText={web.mail}
        karl={web.textoKarl}
      ></Description>
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



