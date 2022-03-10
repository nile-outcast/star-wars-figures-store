import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from 'src/header'
import { theme } from 'src/theme'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Star Wars Figures</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
