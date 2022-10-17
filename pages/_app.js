import '../styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react"
import { DarkModeSwitch } from '../components/nav-link'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DarkModeSwitch>
        < Component {...pageProps} />
      </DarkModeSwitch>
    </ChakraProvider>

  )
}

export default MyApp
