import '../styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react"
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '../components/navbar';

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <ChakraProvider>
      <Navbar props={pageProps}>
        <Component {...pageProps} />
        <Analytics />
      </Navbar>
    </ChakraProvider>

  )
}

export default MyApp
