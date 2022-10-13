import '../styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from '../src/layouts/main';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
