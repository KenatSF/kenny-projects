
import { VStack } from "@chakra-ui/layout";
import Header from "../components/header";
import Description from "../components/description";
import Social from "../components/social";

export default function Home() {
  // Home(props)
  //const { web } = props;

  return (
    <VStack p={5}>
      <Header myInfo={"Data Science - Automatization scripts - Blockchain"}></Header>
      <Social></Social>
      <Description
        infoLeft={"Projects"}
        infoRight={"Skills"}
        text1={"If you're seeking support in qualitative and quantitative research, coding, systematic reviews, meta-analysis, programming algorithms, or DeFi, look no further. You've found the right person."}
        text2={"I'm a passionate technology enthusiast, data scientist, and programmer who helps clients extract value from their data and creates exceptional tools. My work experience includes business intelligence, market research, and process automation."}
        text3={"I've worked on numerous projects utilizing machine learning techniques such as logistic regression, support vector machines, random forests, and clustering techniques. I can assist you in utilizing these techniques to gain insights from your data."}
        text4={"If you require consulting, training, deployment, or code writing, please don't hesitate to get in touch with me."}
        mailText={"e-mail: "}
        karl={"When every fact, every present or past phenomenon of that universe, every phase of present or past life therein, has been examined, classified, and co-ordinated with the rest, then the mission of science will be completed."}
      ></Description>
    </VStack>
  );
}

// export async function getStaticProps({ locale }) {
//   const response = await import(`../lang/${locale}.json`)

//   return {
//     props: {
//       web: response.default.web,
//     },
//   };
// }



