import '../styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react"
import { DarkModeSwitch } from '../components/nav-link'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DarkModeSwitch>
        < Component {...pageProps} />
        <Analytics />
      </DarkModeSwitch>
    </ChakraProvider>

  )
}

export default MyApp
